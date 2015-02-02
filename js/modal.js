<script>
function getCookie(cname) {
var name = cname + "=";
var ca = document.cookie.split(';');
for(var i=0; i<ca.length; i++) {
var c = ca[i];
while (c.charAt(0)==' ') c = c.substring(1);
if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
}
return "";
}

function setCookie(cname,cvalue,exdays) {
var d = new Date();
d.setTime(d.getTime() + (exdays*24*60*60*1000));
var expires = "expires=" + d.toGMTString();
document.cookie = cname+"="+cvalue+"; "+expires;
}
$(function(){
if ((getCookie("allowed")) !== ""){
$(".trans-modal").addClass("DN")
console.log("HIDE")
}

})
function RegisterEmail(){
var email = $("#email").val
$.ajax({
type: 'GET',
url: "/service/addemail.php?email="+email,
success: function(data){
alert("SENT REQUEST")
authorize()
}
});
}
function authorize(){
setCookie("allowed","true",999);
location.reload();
}
</script>