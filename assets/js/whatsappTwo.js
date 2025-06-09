var url = "./assets/js/whatsapp.js";
var s = document.createElement("script");
s.type = "text/javascript";
s.async = true;
s.src = url;
var options = {
	enabled: true,
	chatButtonSetting: {
		backgroundColor: "#4dc247",
		ctaText: "",
		borderRadius: "25",
		marginLeft: "0",
		marginBottom: "70",
		marginRight: "37",
		position: "right",
	},
	brandSetting: {
		brandName: "ProdWex Team",
		brandSubTitle: "Replies within 1 day",
		brandImg: "https://prodwex.com/images/logo24x100.png",
		welcomeText: "Hi,there!\nHow can I help you?",
		messageText: "Hello, I have a question about {{page_link}}",
		backgroundColor: "#0a5f54",
		ctaText: "Start Chat",
		borderRadius: "25",
		autoShow: false,
		phoneNumber: "+2348070660356",
	},
};
s.onload = function () {
	CreateWhatsappChatWidget(options);
};
var x = document.getElementsByTagName("script")[0];
x.parentNode.insertBefore(s, x);
