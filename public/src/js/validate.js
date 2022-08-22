
// Đối tượng
function Validator(options){

    function getParent(element, selector){
        while(element.parentElement){
            if(element.parentElement.matches(selector)){
                return element.parentElement;
            }
            element = element.parentElement;
        }
    }

    var selectorRules = {};

    //Hàm thực hiên validate 
    function validate(inputElement, rule){
        var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
        var errorMessage;

        // lấy ra các rules của selector
        var rules = selectorRules[rule.selector];

        // lặp qua từng rule và kiểm tra
        // nếu có lỗi thì dừng kiểm tra
        for(var i=0;i<rules.length;i++){
            errorMessage = rules[i](inputElement.value);
            if(errorMessage)
                break;
        }
                     
            if(errorMessage){
                errorElement.innerText = errorMessage;
                // khi có lỗi hiện lên màu đỏ
                getParent(inputElement, options.formGroupSelector).classList.add('invalid');
                getParent(inputElement, options.formGroupSelector).classList.remove('invali');
                
            }
            else{
                errorElement.innerText = '';
                getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
                getParent(inputElement, options.formGroupSelector).classList.add('invali');

            }
            return !errorMessage;
    }


    // lấy element của form cần validate
    var formElement = document.querySelector(options.form);
    
    if(formElement){
        // khí click submit form
       formElement.onsubmit = function(e){
           e.preventDefault();
           var isFormValid = true;
        // thực hiện  lặp qua từng rules và validate
           options.rules.forEach(function (rule){
                var inputElement = formElement.querySelector(rule.selector);
                var isValid = validate(inputElement, rule);
                if(!isValid){
                    isFormValid = false;
                }
           });
          

           if(isFormValid){
            //trường hợp submit với javascript
               if(typeof options.onSubmit === 'function'){
                    
                var enableInput = formElement.querySelectorAll('[name]');
                    var formValues = Array.from(enableInput).reduce(function(values, input){
                        values[input.name] = input.value
                        return values;
                    }, {});
                    options.onSubmit(formValues);
               }
            //    trường hợp submit với hành vi mặc định
               else {
                    formElement.submit();
               }
           }
       }

        // lặp qua mỗi rule và xử lý(lắng nghe sự kiện bulr, input, ...)
        options.rules.forEach(function (rule){

            // lưu lại các rules cho mỗi input 
            if(Array.isArray(selectorRules[rule.selector])){
                selectorRules[rule.selector].push(rule.test);
            }else{
                selectorRules[rule.selector] = [rule.test];
            }

            var inputElement = formElement.querySelector(rule.selector);
            
            if(inputElement){
                // xử lý trưởng hợp blur khỏi input
                inputElement.onblur = function(){
                    validate(inputElement, rule);
                    
                }

                // sử lý mỗi khi người dùng nhập vào input
                inputElement.oninput = function(){
                    var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
                    errorElement.innerText = '';
                    getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
                    // khi nhập thông tin vào thẻ input thì sẽ hiện border màu xanh
                    getParent(inputElement, options.formGroupSelector).classList.add('invali');

                }
            }
        });


    }

}

// định nghĩa rules
// Nguyên tắc của các rules
// 1.khi có lỗi => trả ra message lỗi
// 2.khi hợp lệ => không trả ra cái j cả (undefined)

// hàm kiểm tra rỗng
Validator.isRequired = function(selector, message){
    return{
        selector: selector,
        test: function(value){
            return value.trim() ? undefined : message || 'Vui lòng nhập thông tin !';
        }
    }
}

Validator.isEmail = function(selector, message){
    return{
        selector: selector,
        test: function(value){
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : message || 'Trường này phải là emali !';
        }
    }
}
