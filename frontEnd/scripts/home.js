document.addEventListener("DOMContentLoaded", function() {
    var backgroundImages = ['images/nissanjuke.png', 'images/cadillaclyriq.png', 'images/bugattibolide.png'];
    var logoImages = ['images/nissan.png', 'images/cadillac.png', 'images/bugatti.png'];
    var names = ['nissan juke', 'Cadillac Lyriq', 'bugatti bolide'];
    var descriptions = [
        'The Nissan Juke is a compact crossover SUV known for its distinctive styling and sporty performance. It offers a turbocharged engine, agile handling, and a tech-friendly interior, combining practicality with a fun driving experience.',
        'The Cadillac Lyriq is an electric SUV with a sleek design and a range of up to 300 miles on a full charge. It features a 33-inch curved OLED display, advanced driver-assistance systems, and a focus on luxury and performance.',
        'The Bugatti Bolide is a track-focused hypercar with a 1,600-hp quad-turbo W16 engine. It features a lightweight carbon fiber body and advanced aerodynamics, aiming for speeds over 310 mph.'
    ];
    
    var title = document.title;
    var currentIndex = 0;

    function updateContent() {
        var topElements = document.querySelectorAll('.top');

        for (var i = 0; i < topElements.length; i++) {
            var topElement = topElements[i];
            var idx = (currentIndex + i) % backgroundImages.length;

            topElement.style.backgroundImage = 'url(\'' + backgroundImages[idx] + '\')';

            var itemLogo = topElement.querySelector('.itemlogo');
            if (itemLogo) {
                itemLogo.style.backgroundImage = 'url(\'' + logoImages[idx] + '\')';
            }

            var itemName = topElement.querySelector('.itemname > p');
            if (itemName) {
                itemName.textContent = names[idx];
            }

            var itemDescription = topElement.querySelector('.itemdescription > p');
            if (itemDescription) {
                itemDescription.textContent = descriptions[idx];
            }
        }

        currentIndex = (currentIndex + 1) % backgroundImages.length;
    }

    switch (title) {
        case "Prime Auto Home":
            var element = document.getElementById('Home');
            if (element) {
                element.style.color = '#c9e93e';
                element.style.textShadow = '0 0 5px #c9e93e, 0 0 15px #c9e93e, 0 0 20px #c9e93e, 0 0 25px #c9e93e, 0 0 30px #c9e93e';
                element.style.transition = 'text-shadow 0.3s ease';
            }
            break;

            case "Prime Auto Buy":
            var element = document.getElementById('Buy');
            if (element) {
                element.style.color = '#c9e93e';
                element.style.textShadow = '0 0 5px #c9e93e, 0 0 15px #c9e93e, 0 0 20px #c9e93e, 0 0 25px #c9e93e, 0 0 30px #c9e93e';
                element.style.transition = 'text-shadow 0.3s ease';
            }
            break;

            case "Prime Auto Parts":
            var element = document.getElementById('Parts');
            if (element) {
                element.style.color = '#c9e93e';
                element.style.textShadow = '0 0 5px #c9e93e, 0 0 15px #c9e93e, 0 0 20px #c9e93e, 0 0 25px #c9e93e, 0 0 30px #c9e93e';
                element.style.transition = 'text-shadow 0.3s ease';
            }
            break;
    }

    updateContent();
    setInterval(updateContent, 5000);
});

        var x=document.getElementById('login');
		var y=document.getElementById('register');
		var z=document.getElementById('btn');
		function register()
		{
            x.style.display="none";
			y.style.display="flex";
			z.style.left='50%';

		}
		function login()
		{
			x.style.display="flex";
			y.style.display="none"
			z.style.left='0px';
		}

       
        var loginModal = document.getElementById('login-form');
        var merchModal = document.getElementById('merch-detail');
        
        window.onclick = function(event) {
            if (event.target == loginModal) {
                loginModal.style.display = "none";
            }
          
        }
        
         function back(){
            merchModal.style.display = "none";
         }
         function closepay(){
            document.getElementById('payment').style.display="none"
         }
        //  password validate
        function validateForm() {
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
        
            if (password !== confirmPassword) {
                alert("Passwords do not match. Please try again.");
                return false; 
            }
            
            const agreeCheckbox = document.getElementById('agree');
            
            if (!agreeCheckbox.checked) {
                alert("You must agree to the terms and conditions.");
                return false;
            } 

            alert("Registration successful");
            return true; 
        }

        // march image next
        var images = [
            '../images/audi1.png',
            '../images/audi2.png',
            '../images/audi3.png',
            '../images/audi4.png'
        ];
        
        var currentIndex = 0;
        var carimageelement = document.getElementById('carimage');
 
        
        function changeimage() {         
            currentIndex++;                
            if (currentIndex >= images.length) {
                currentIndex = 0;
            }             
            carimageelement.style.backgroundImage = 'url(' + images[currentIndex] + ')';
        }




        document.addEventListener('DOMContentLoaded', function () {
            var yearSelect = document.getElementById('year');
            var currentYear = new Date().getFullYear(); // Get the current year
            var startYear = 1900; // You can change this to whatever start year you prefer
            var endYear = currentYear + 10; // You can change this to go beyond the current year
        
            for (var year = startYear; year <= endYear; year++) {
                var option = document.createElement('option');
                option.value = year;
                option.textContent = year;
                if (year === currentYear) {
                    option.selected = true; // Preselect the current year
                }
                yearSelect.appendChild(option);
            }
        });

        
        document.addEventListener('DOMContentLoaded', function () {
            var yearSelect = document.getElementById('year');
            var currentYear = new Date().getFullYear();
            var endYear = currentYear + 10; // Allows selection up to 10 years in the future
        
            for (var year = currentYear; year <= endYear; year++) {
                var option = document.createElement('option');
                option.value = year;
                option.textContent = year;
                yearSelect.appendChild(option);
            }
        });
        
        function validateForm() {
            var cardNumber = document.getElementById('card-number').value.replace(/\s+/g, '');
            var cvc = document.getElementById('cvc').value;
            var month = document.getElementById('month').value;
            var year = document.getElementById('year').value;
            var currentYear = new Date().getFullYear();
            var currentMonth = new Date().getMonth() + 1;
        
          
            if (year < currentYear || (year == currentYear && month < currentMonth)) {
                alert("Invalid expiration date");
                return false;
            }
        
           
            if (cvc.length < 3 || cvc.length > 4 || isNaN(cvc)) {
                alert("Invalid CVC/CVV code");
                return false;
            }
        
            return true; 
        }
w        