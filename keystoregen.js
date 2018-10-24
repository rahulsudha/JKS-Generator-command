

$(document).ready(function()
{
  function equalizepassword()
  {
    var keystorepassword = document.getElementById('keystorepass').value;
    //alert(keystorepassword);
    document.getElementById('aliaspass').value = keystorepassword;
    //alert(document.getElementById('aliaspass').value);
  }

  $("#checkpass").change(function () 
  {
    if($(this).prop("checked"))
    {
      $("#aliaspass").attr("disabled", "disabled");
      equalizepassword();
    }
    else 
    {
      $("#aliaspass").removeAttr("disabled", "disabled");
    }
  });


    $(function(){
      $("input[type=radio]").change(function(){
          //alert( $(this).val() );
          var radiovalue = $(this).val();
          //alert(radiovalue);
          if (radiovalue == "my")
          {
            //alert("my selected \\");
            document.getElementById('aliasname').value = "mykey";
            document.getElementById('keystorename').value = "mystore.jks";
            document.getElementById('keystorepass').value = "barcap.com";
          }
          else if (radiovalue == "prod")
          {
            //alert("prod selected");
            document.getElementById('aliasname').value = "mykey";
            document.getElementById('keystorename').value = "prodstore.jks";
            document.getElementById('keystorepass').value = "portal";
          }
          else
          {
            document.getElementById('aliasname').value = "";
            document.getElementById('keystorename').value = "";
            document.getElementById('keystorepass').value = "";
          }
      });
    });

// main function ends below
});

function validateform()
{
  if (document.getElementById('servername').value == "") 
  { 
    $("#servername_class").addClass("error");

    $("#aliasname_class").removeClass("error");
    $("#keystorename_class").removeClass("error");
    $("#keystorepass_class").removeClass("error");
    $("#aliaspass_class").removeClass("error");
  }
  else if (document.getElementById('aliasname').value == "") 
  {
    $("#aliasname_class").addClass("error");

    $("#servername_class").removeClass("error");
    $("#keystorename_class").removeClass("error");
    $("#keystorepass_class").removeClass("error");
    $("#aliaspass_class").removeClass("error");    
  }
  else if (document.getElementById('keystorename').value == "") 
  {
    $("#keystorename_class").addClass("error");

    $("#servername_class").removeClass("error");
    $("#aliasname_class").removeClass("error");
    $("#keystorepass_class").removeClass("error");
    $("#aliaspass_class").removeClass("error");    
  }
  else if (document.getElementById('keystorepass').value == "") 
  {
    $("#keystorepass_class").addClass("error");

    $("#servername_class").removeClass("error");
    $("#aliasname_class").removeClass("error");
    $("#keystorename_class").removeClass("error");
    $("#aliaspass_class").removeClass("error");
  }
  else if (document.getElementById('aliaspass').value == "") 
  {
    $("#aliaspass_class").addClass("error");

    $("#servername_class").removeClass("error");
    $("#aliasname_class").removeClass("error");
    $("#keystorename_class").removeClass("error");
    $("#keystorepass_class").removeClass("error");
  }
  else
  {
    $("#servername_class").removeClass("error");
    $("#aliasname_class").removeClass("error");
    $("#keystorename_class").removeClass("error");
    $("#keystorepass_class").removeClass("error");
    $("#aliaspass_class").removeClass("error");
    parse();
  }
}


function parse()
{
  var dname = "CN="+document.getElementById('servername').value+", OU=Web Portal Services, O=Barclays PLC, L=London, ST=London, C=GB"
  var line01 = "keytool -genkey -noprompt \\";
  var line02 = "-alias "+document.getElementById('aliasname').value+" \\";
  var line03 = "-dname "+"\""+dname+"\""+" \\";
  var line04 = "-keystore "+document.getElementById('keystorename').value+" \\";
  var line05 = "-storepass "+document.getElementById('keystorepass').value+" \\";
  var line06 = "-keypass "+document.getElementById('aliaspass').value;
  var line01a = "keytool -certreq -noprompt \\"

  // alert(line01);
  // alert(line02);
  // alert(line03);
  // alert(line04);
  // alert(line05);
  // alert(line06);

  document.getElementById('textareaout').value = line01+"\n"+line02+"\n"+line03+"\n"+line04+"\n"+line05+"\n"+line06+"\n";
  document.getElementById('textareaoutcsr').value = line01a+"\n"+line02+"\n"+line04+"\n"+line05+"\n"+line06+"\n";
}


function jkscopy()
{
 $("#textareaout").select();
    document.execCommand('copy'); 
}

function csrcopy()
{
  $("#textareaoutcsr").select();
    document.execCommand('copy');
}

