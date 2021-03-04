
    $( document ).ready(function() {
        $('.submit').click(function (event){
            event.preventDefault();
            console.log('hi');

            var name=$('#name').val();
            var email=$('#email').val();
            var subject=$('#subject').val();
            var message=$('#message').val();
            var statusElm=$('.status');
            statusElm.empty();

            if(email.length >5 && email.includes('@') && email.includes('.')){
                statusElm.append('<div>Email is Valid</div>')
            }
            else{
                statusElm.append('<div>Email is not Valid</div>')
            }

            if(subject.length>2){
                statusElm.append('<div>Subject is Valid</div>')
            }
            else{
                statusElm.append('<div>Subject is not Valid</div>')
            }

            if(message.length>2){
                statusElm.append('<div>Message is Valid</div>')
            }
            else{
                statusElm.append('<div>Message is not Valid</div>')
            }


        })
    });
