function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5phjNQVNRrT":
        Script1();
        break;
      case "6GOuxHYASzg":
        Script2();
        break;
      case "6KzWazyTyMt":
        Script3();
        break;
      case "67Ypy1Xi8H2":
        Script4();
        break;
      case "6qPZc3RkpWK":
        Script5();
        break;
      case "5b9TiEEgMW6":
        Script6();
        break;
      case "5tpi3nuyDYB":
        Script7();
        break;
      case "6oyCgdzX382":
        Script8();
        break;
      case "6a1nW0nMWIL":
        Script9();
        break;
      case "5lGGBTGj2Us":
        Script10();
        break;
      case "5zjp0lzG9tP":
        Script11();
        break;
      case "6JrkdUDBJRb":
        Script12();
        break;
      case "6jmdlE5ZCYo":
        Script13();
        break;
      case "6N4FlXykaRo":
        Script14();
        break;
      case "5d4KLuvMdcZ":
        Script15();
        break;
      case "6gW2mMrz5WR":
        Script16();
        break;
  }
}

function Script1()
{
  $("#tab-customlink").hide();
}

function Script2()
{
  var player = GetPlayer();
var email="nsdd_cne@ksmc.med.sa";
var subject=player.GetVar("Name");
var body_start="Dear Instructor,";
var mailto_link='mailto:'+email+'?subject='+subject+'&body='+body_start;
win=window.open(mailto_link,'emailWin');
}

function Script3()
{
  $("#tab-customlink").hide();
}

function Script4()
{
  $("#tab-customlink").hide();
}

function Script5()
{
  $("#tab-customlink").hide();
}

function Script6()
{
  $("#tab-customlink").hide();
}

function Script7()
{
  $("#tab-customlink").hide();
}

function Script8()
{
  $("#tab-customlink").hide();
}

function Script9()
{
  $("#tab-customlink").hide();
}

function Script10()
{
  $("#tab-customlink").hide();
}

function Script11()
{
  $("#tab-customlink").hide();
}

function Script12()
{
  $("#tab-customlink").hide();
}

function Script13()
{
  $("#tab-customlink").hide();
}

function Script14()
{
  var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var dateString=month + "/" + day + "/" + year

var player = GetPlayer();
player.SetVar("SystemDate",dateString);
}

function Script15()
{
  $("#tab-customlink").show();
}

function Script16()
{
  window.print();
}

