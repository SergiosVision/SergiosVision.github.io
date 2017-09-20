function nonameFunc(){
    document.querySelector('#dropDown').classList.toggle("show");
};

window.addEventListener('click', function(event){
    if(!event.target.matches('.dropBtn')){
        
        var dropdowns = document.getElementsByClassName("doropdownContent");
        
        for(var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if(openDropdown.classList.contains('show')){
                openDropdown.classList.remove('show');
            }
        };
    }
});

buttoN.addEventListener('click', nonameFunc);