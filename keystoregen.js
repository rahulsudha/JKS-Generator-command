
//+---------------------------+//
//| Script written by Rahul S |//
//+---------------------------+//
//| rahulsudha143@gmail.com   |//
//+---------------------------+//


$(function(){
    $("#helpbutton").click(function(){
        $(".helpmodal").modal('show');
    });
    $(".helpmodal").modal({
        closable: true
    });
});



$(document).ready(function() {

  //Function to keep the Alias and Keystore password the same

  function equalizepassword() {
        var keystorepassword = document.getElementById('keystorepass').value;
        document.getElementById('aliaspass').value = keystorepassword;
    }

// Below checks for the checkbox to see if above functions needs to be called or not.

    $("#checkpass").change(function() {
        if ($(this).prop("checked")) {

            if (document.getElementById('keystorepass').value == "") {
                alert("Keystore passowrd is empty!")
                document.getElementById("checkpass").checked = false;
            } else {
                $("#aliaspass").attr("disabled", "disabled");
                equalizepassword();
            }
        } else {
            $("#aliaspass").removeAttr("disabled", "disabled");
            document.getElementById('aliaspass').value = "";
        }
    });


}); // document on load function ends here

//Validation function starts below
function removeerrorclass()
{
    $("#servername_class").removeClass("error");
    $("#aliasname_class").removeClass("error");
    $("#keystorename_class").removeClass("error");
    $("#keystorepass_class").removeClass("error");
    $("#aliaspass_class").removeClass("error");
    $("#OU_class").removeClass("error");
    $("#Org_class").removeClass("error");
    $("#locality_class").removeClass("error");
    $("#state_class").removeClass("error");
}


function validateform() {

    document.getElementById('textareaout').value = "";
    document.getElementById('textareaoutcsr').value = "";

    if (document.getElementById('servername').value == "") {
        $("#servername_class").addClass("error");

        $("#aliasname_class").removeClass("error");
        $("#keystorename_class").removeClass("error");
        $("#keystorepass_class").removeClass("error");
        $("#aliaspass_class").removeClass("error");
        $("#OU_class").removeClass("error");
        $("#Org_class").removeClass("error");
        $("#locality_class").removeClass("error");
        $("#state_class").removeClass("error");
    } else if (document.getElementById('aliasname').value == "") {
        $("#aliasname_class").addClass("error");

        $("#servername_class").removeClass("error");
        $("#keystorename_class").removeClass("error");
        $("#keystorepass_class").removeClass("error");
        $("#aliaspass_class").removeClass("error");
        $("#OU_class").removeClass("error");
        $("#Org_class").removeClass("error");
        $("#locality_class").removeClass("error");
        $("#state_class").removeClass("error");
    } else if (document.getElementById('keystorename').value == "") {
        $("#keystorename_class").addClass("error");

        $("#servername_class").removeClass("error");
        $("#aliasname_class").removeClass("error");
        $("#keystorepass_class").removeClass("error");
        $("#aliaspass_class").removeClass("error");
        $("#OU_class").removeClass("error");
        $("#Org_class").removeClass("error");
        $("#locality_class").removeClass("error");
        $("#state_class").removeClass("error");
    } else if (document.getElementById('keystorepass').value == "") {
        $("#keystorepass_class").addClass("error");

        $("#servername_class").removeClass("error");
        $("#aliasname_class").removeClass("error");
        $("#keystorename_class").removeClass("error");
        $("#aliaspass_class").removeClass("error");
        $("#OU_class").removeClass("error");
        $("#Org_class").removeClass("error");
        $("#locality_class").removeClass("error");
        $("#state_class").removeClass("error");
    } else if (document.getElementById('aliaspass').value == "") {
        $("#aliaspass_class").addClass("error");

        $("#servername_class").removeClass("error");
        $("#aliasname_class").removeClass("error");
        $("#keystorename_class").removeClass("error");
        $("#keystorepass_class").removeClass("error");
        $("#OU_class").removeClass("error");
        $("#Org_class").removeClass("error");
        $("#locality_class").removeClass("error");
        $("#state_class").removeClass("error");
    } else if (document.getElementById('OUname').value == "") {
        $("#OU_class").addClass("error");

        $("#servername_class").removeClass("error");
        $("#aliasname_class").removeClass("error");
        $("#keystorename_class").removeClass("error");
        $("#keystorepass_class").removeClass("error");

        $("#Org_class").removeClass("error");
        $("#locality_class").removeClass("error");
        $("#state_class").removeClass("error");
    } else if (document.getElementById('Orgname').value == "") {
        $("#Org_class").addClass("error");

        $("#servername_class").removeClass("error");
        $("#aliasname_class").removeClass("error");
        $("#keystorename_class").removeClass("error");
        $("#keystorepass_class").removeClass("error");
        $("#OU_class").removeClass("error");
        $("#locality_class").removeClass("error");
        $("#state_class").removeClass("error");
    } else if (document.getElementById('locality').value == "") {
        $("#locality_class").addClass("error");

        $("#servername_class").removeClass("error");
        $("#aliasname_class").removeClass("error");
        $("#keystorename_class").removeClass("error");
        $("#keystorepass_class").removeClass("error");
        $("#OU_class").removeClass("error");
        $("#Org_class").removeClass("error");
        $("#state_class").removeClass("error");
    } else if (document.getElementById('statename').value == "" || document.getElementById('ccname').value == "") {
        $("#state_class").addClass("error");

        $("#servername_class").removeClass("error");
        $("#aliasname_class").removeClass("error");
        $("#keystorename_class").removeClass("error");
        $("#aliaspass_class").removeClass("error");
        $("#OU_class").removeClass("error");
        $("#Org_class").removeClass("error");
        $("#locality_class").removeClass("error");

    } else {
        removeerrorclass();
        parse();
    }
}

// Function for parsing the values to form the code

function parse() {
    
    var ou_name = document.getElementById('OUname').value;
    var org_name = document.getElementById('Orgname').value;
    var locality_name = document.getElementById('locality').value;
    var state_name = document.getElementById('statename').value;
    var cc_name = document.getElementById('ccname').value;

    var dname = "CN=" + document.getElementById('servername').value + ", OU=" + ou_name +", O=" + org_name + ", L=" + locality_name + ", ST=" + state_name + ", C=" + cc_name;
    
    var line01 = "keytool -genkey -noprompt \\";
    var line011 = "-keyalg RSA \\"
    var line02 = "-alias " + document.getElementById('aliasname').value + " \\";
    var line03 = "-dname " + "\"" + dname + "\"" + " \\";
    var line04 = "-keystore " + document.getElementById('keystorename').value + " \\";
    var line05 = "-storepass " + document.getElementById('keystorepass').value + " \\";
    var line06 = "-keypass " + document.getElementById('aliaspass').value;
    var line01a = "keytool -certreq -noprompt \\"

    // Outputing the values for the JKS and CSR code

    document.getElementById('textareaout').value = line01 + "\n" + line011 + "\n" + line02 + "\n" + line03 + "\n" + line04 + "\n" + line05 + "\n" + line06 + "\n";
    document.getElementById('textareaoutcsr').value = line01a + "\n" + line02 + "\n" + line04 + "\n" + line05 + "\n" + line06 + "\n";
}

// clear button function

function clearall()
{
    document.getElementById('textareaout').value = "";
    document.getElementById('textareaoutcsr').value = "";
    document.getElementById('servername').value = "";
    document.getElementById('aliasname').value = "";
    document.getElementById('keystorename').value ="";
    document.getElementById('keystorepass').value ="";
    document.getElementById('aliaspass').value ="";
    document.getElementById('OUname').value ="";
    document.getElementById('Orgname').value ="";
    document.getElementById('locality').value ="";
    document.getElementById('statename').value ="";
    document.getElementById('ccname').value ="";
    document.getElementById("checkpass").checked = false;
}


// Copy functions for both JKS and CSR

function jkscopy() {
    $("#textareaout").select();
    document.execCommand('copy');
}

function csrcopy() {
    $("#textareaoutcsr").select();
    document.execCommand('copy');
}

