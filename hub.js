	
	// cart empty//
	
	function showCart()
	{
		alert("Cart is Empty");
	}
	
	// Working Total Bill//
	
	let total = 0;
	
	function addToCart(price)
	{
		total = total + price;
		
		document.getElementById("total").innerHTML = total;
		
		alert("Item Added To Cart");
	}
		
	
	// open menu page//
	function openMenu()
	{
		window.location.href="menu.html";
	}
	
	function showDelivery()
	{
		alert("Delicious Food, Fast Delivery!");
	}
	
	//search page//
	function searchFood()
	{
		let food = prompt("Search Food Item");
		
		if(food=="pizza" || food=="burger" || food=="spring rolls" || food=="garlic bread" || food=="tomato bruschetta" || food=="french fries" || food=="pasta" || food=="rajma chawal" || food=="cake" || food=="fruit salad" || food=="cheese cake" || food=="chocolate cake")
		{
			alert(food + " Available in Menu");
			window.location.href="menu.html";
		}
		else
		{
			alert("Item Not Found");
		}
	}
	
	function orderFood()
	{
		alert("Order Placed Successfully!");
	}
	
	let images = ["images/z1.jpg","images/z2.jpg"];

	let i = 0;
	
	function changeImage(){
	
	document.getElementById("slide").src = images[i];

	i++;

	if(i == images.length){
		i = 0;
	}
	}

	setInterval(changeImage,5000);

	//contact form Validation
	
	function validateform()
	{
	let name = document.getElementById("contact-name").value;
	
	let email = document.getElementById("contact-email").value;
	
	let message = document.getElementById("contact-message").value;

	let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
	
	if(name==""||email=="")
	{
		alert("Please fill all fields!");
		return false;
	}
	else if(name.length<3||name.length>32)
	{
		alert("Name must be between 3 and 32 characters");
		return false;
	}
	else if(!email.match(emailPattern))
	{
		alert("E-Mail Address does not appear to be valid!");
		return false;
	}
	else if(message.length<10||message.length>3000)
	{
		alert("Enquiry must be between 10 and 3000 characters!");
		return false;
	}
	else{
		alert("Your Message has been sent Successfully!");
		window.location.href="Thankyou.html";
	}
	}

	// Login Function//
	function loginUser()
	{
		let email = document.getElementById("login-email").value;
		
		let password = document.getElementById("login-password").value;
		
		let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
		
		if(email =="" || password =="")
		{
			alert("Please fill all fields!");
			return false;
		}
		else if(!email.match(emailPattern))
		{
			alert("Please enter a valid email!");
			return false;
		}
		else if(password.length < 4 || password.length >4)
		{
			alert("Password must be at least 4 characters!");
			return false;
		}
		else{
			alert("Login Successful");
			window.location.href="index.html";
			}
	}
	
	// Register form validation //
	
	function registerUser()
	{
		let firstName = document.getElementById("firstName").value;
		
		let lastName = document.getElementById("lastName").value;
		
		let email = document.getElementById("register-email").value;
		
		let contact = document.getElementById("register-mobile").value;
		
		let password = document.getElementById("register-password").value;
		
		let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
		
		if(firstName=="" || lastName=="" || email=="" || contact=="" || password=="")
		{
			alert("Please fill all fields!");
			return false;
		}
		else if(!email.match(emailPattern))
		{
			alert("Please enter a valid email!");
			return false;
		}
		else if(contact.length!=10 || isNaN(contact))
		{
			alert("Contact number must be 10 digits!");
			return false;
		}
		else if(password.length < 4 || password.length >4)
		{
			alert("Password must be at least 4 characters!");
			return false;
		}
		else
		{
		alert("Registration Successful");
		window.location.href="login.html";
		}
	}
	//Newsletter Subscribe//
	function subscribeUser()
	{
		let email = document.getElementById("subEmail").value;
		
		let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
		
		if(email=="")
		{
			alert("Enter Email");
		}
		else if(!email.match(emailPattern))
		{
			alert("Please enter a valid email!");
			return false;
		}
		else{
			alert("Subscribed Successfully");
			window.location.href="index.html";
		}
	}
	
