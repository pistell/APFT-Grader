document.addEventListener('DOMContentLoaded', function() {
  "use strict";
  console.log('APFT JavaScript File Loaded');

  document.getElementById('apft-events').addEventListener('submit', function(event) {
    event.preventDefault();

    var checked = false,
      radios = document.getElementsByName('x');
    document.getElementById('scoreboard').style.display = "none";
    for (var i = 0, radio; radio = radios[i]; i++) {
      if (radio.checked) {
        checked = true;
        document.getElementById('scoreboard').style.display = "inherit";
        document.getElementById('fbAlt').style.display = "inline-block";
        document.getElementById('toDA').style.display = "inline-block";
        break;
      }
    }
    if (!checked) {
      alert("Please select your gender");
    }
    if (checked == true) {

      var fbseconds = 0;
      var radios = document.getElementsByName("x");
      for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
          var gender = radios[i].value;
        }
      }

      var age = document.getElementById('age').value,
        puCount = document.getElementById('puCount').value,
        suCount = document.getElementById('suCount').value,
        minutes = parseInt(document.getElementsByName('minutes')[0].value, 10) || 0,
        seconds = parseInt(document.getElementsByName('seconds')[0].value, 10) || 0,
        totalRunTime = (minutes * 60 + seconds),
        runScore = 0,
        puScore = 0,
        suScore = 0;

        if(seconds == 0){
          fbseconds = "00";
        } else {
          fbseconds = seconds;
        }
      // if (typeof(seconds) === 'undefined') {
      //   seconds = '00';
      // }
      // if (seconds = '0') {
      //   seconds = '00';
      // }

      console.log(seconds);

      Number.prototype.between = function(min, max) {
        return this > min && this < max;
      };
      //if the run time has not been entered, hide the results display
      if (document.getElementsByName('minutes')[0].value === '') {
        document.getElementById('scoreboard').style.display = "none";
        document.getElementById('fbAlt').style.display = "none";
        document.getElementById('toDA').style.display = "none";
        document.getElementsByName('minutes')[0].focus();
      } else {
        document.getElementById('scoreboard').style.display = "inherit";
        document.getElementById('fbAlt').style.display = "inline-block";
        document.getElementById('toDA').style.display = "inline-block";
      }

      //male
      if (gender == 'male') {
        console.log('gender is male');

        if (age >= 17 && age <= 21) {
          console.log('age range is between 17 and 21');

          //calculate pushup score male 17-21
          if (puCount >= 71) {
            puScore = 100;
          } else if (puCount == 70) {
            puScore = 99;
          } else if (puCount == 69) {
            puScore = 97;
          } else if (puCount == 68) {
            puScore = 96;
          } else if (puCount == 67) {
            puScore = 94;
          } else if (puCount == 66) {
            puScore = 93;
          } else if (puCount == 65) {
            puScore = 92;
          } else if (puCount == 64) {
            puScore = 90;
          } else if (puCount == 63) {
            puScore = 89;
          } else if (puCount == 62) {
            puScore = 88;
          } else if (puCount == 61) {
            puScore = 86;
          } else if (puCount == 60) {
            puScore = 85;
          } else if (puCount == 59) {
            puScore = 83;
          } else if (puCount == 58) {
            puScore = 82;
          } else if (puCount == 57) {
            puScore = 81;
          } else if (puCount == 56) {
            puScore = 79;
          } else if (puCount == 55) {
            puScore = 78;
          } else if (puCount == 54) {
            puScore = 77;
          } else if (puCount == 53) {
            puScore = 75;
          } else if (puCount == 52) {
            puScore = 74;
          } else if (puCount == 51) {
            puScore = 72;
          } else if (puCount == 50) {
            puScore = 71;
          } else if (puCount == 49) {
            puScore = 70;
          } else if (puCount == 48) {
            puScore = 68;
          } else if (puCount == 47) {
            puScore = 67;
          } else if (puCount == 46) {
            puScore = 66;
          } else if (puCount == 45) {
            puScore = 64;
          } else if (puCount == 44) {
            puScore = 63;
          } else if (puCount == 43) {
            puScore = 61;
          } else if (puCount == 42) {
            puScore = 60;
          } else if (puCount == 41) {
            puScore = 59;
          } else if (puCount == 40) {
            puScore = 57;
          } else if (puCount == 39) {
            puScore = 56;
          } else if (puCount == 38) {
            puScore = 54;
          } else if (puCount == 37) {
            puScore = 53;
          } else if (puCount == 36) {
            puScore = 52;
          } else if (puCount == 35) {
            puScore = 50;
          } else if (puCount == 34) {
            puScore = 49;
          } else if (puCount == 33) {
            puScore = 48;
          } else if (puCount == 32) {
            puScore = 46;
          } else if (puCount == 31) {
            puScore = 45;
          } else if (puCount == 30) {
            puScore = 43;
          } else if (puCount == 29) {
            puScore = 42;
          } else if (puCount == 28) {
            puScore = 41;
          } else if (puCount == 27) {
            puScore = 39;
          } else if (puCount == 26) {
            puScore = 38;
          } else if (puCount == 25) {
            puScore = 37;
          } else if (puCount == 24) {
            puScore = 35;
          } else if (puCount == 23) {
            puScore = 34;
          } else if (puCount == 22) {
            puScore = 32;
          } else if (puCount == 21) {
            puScore = 31;
          } else if (puCount == 20) {
            puScore = 30;
          } else if (puCount == 19) {
            puScore = 28;
          } else if (puCount == 18) {
            puScore = 27;
          } else if (puCount == 17) {
            puScore = 26;
          } else if (puCount == 16) {
            puScore = 24;
          } else if (puCount == 15) {
            puScore = 23;
          } else if (puCount == 14) {
            puScore = 21;
          } else if (puCount == 13) {
            puScore = 20;
          } else if (puCount == 12) {
            puScore = 19;
          } else if (puCount == 11) {
            puScore = 17;
          } else if (puCount == 10) {
            puScore = 16;
          } else if (puCount == 9) {
            puScore = 14;
          } else if (puCount == 8) {
            puScore = 13;
          } else if (puCount == 7) {
            puScore = 12;
          } else if (puCount == 6) {
            puScore = 10;
          } else if (puCount == 5) {
            puScore = 9;
          } else if (puCount == 4) {
            puScore = 8;
          } else if (puCount == 3) {
            puScore = 6;
          } else if (puCount == 2) {
            puScore = 5;
          } else if (puCount == 1) {
            puScore = 3;
          } else if (puCount == 0) {
            puScore = 0;
          }
          //calculate situp score male 17-21
          if (suCount >= 77) {
            suScore = 100;
          } else if (suCount == 77) {
            suScore = 98;
          } else if (suCount == 76) {
            suScore = 97;
          } else if (suCount == 75) {
            suScore = 95;
          } else if (suCount == 74) {
            suScore = 94;
          } else if (suCount == 73) {
            suScore = 92;
          } else if (suCount == 72) {
            suScore = 90;
          } else if (suCount == 71) {
            suScore = 89;
          } else if (suCount == 70) {
            suScore = 87;
          } else if (suCount == 69) {
            suScore = 86;
          } else if (suCount == 68) {
            suScore = 84;
          } else if (suCount == 67) {
            suScore = 82;
          } else if (suCount == 66) {
            suScore = 81;
          } else if (suCount == 65) {
            suScore = 79;
          } else if (suCount == 64) {
            suScore = 78;
          } else if (suCount == 63) {
            suScore = 76;
          } else if (suCount == 62) {
            suScore = 74;
          } else if (suCount == 61) {
            suScore = 73;
          } else if (suCount == 60) {
            suScore = 71;
          } else if (suCount == 59) {
            suScore = 70;
          } else if (suCount == 58) {
            suScore = 68;
          } else if (suCount == 57) {
            suScore = 66;
          } else if (suCount == 56) {
            suScore = 65;
          } else if (suCount == 55) {
            suScore = 63;
          } else if (suCount == 54) {
            suScore = 62;
          } else if (suCount == 53) {
            suScore = 60;
          } else if (suCount == 52) {
            suScore = 58;
          } else if (suCount == 51) {
            suScore = 57;
          } else if (suCount == 50) {
            suScore = 55;
          } else if (suCount == 49) {
            suScore = 54;
          } else if (suCount == 48) {
            suScore = 52;
          } else if (suCount == 47) {
            suScore = 50;
          } else if (suCount == 46) {
            suScore = 49;
          } else if (suCount == 45) {
            suScore = 47;
          } else if (suCount == 44) {
            suScore = 46;
          } else if (suCount == 43) {
            suScore = 44;
          } else if (suCount == 42) {
            suScore = 42;
          } else if (suCount == 41) {
            suScore = 41;
          } else if (suCount == 40) {
            suScore = 39;
          } else if (suCount == 39) {
            suScore = 38;
          } else if (suCount == 38) {
            suScore = 36;
          } else if (suCount == 37) {
            suScore = 34;
          } else if (suCount == 36) {
            suScore = 33;
          } else if (suCount == 35) {
            suScore = 31;
          } else if (suCount == 34) {
            suScore = 30;
          } else if (suCount == 33) {
            suScore = 28;
          } else if (suCount == 32) {
            suScore = 26;
          } else if (suCount == 31) {
            suScore = 25;
          } else if (suCount == 30) {
            suScore = 23;
          } else if (suCount == 29) {
            suScore = 22;
          } else if (suCount == 28) {
            suScore = 20;
          } else if (suCount == 27) {
            suScore = 18;
          } else if (suCount == 26) {
            suScore = 17;
          } else if (suCount == 25) {
            suScore = 15;
          } else if (suCount == 24) {
            suScore = 14;
          } else if (suCount == 23) {
            suScore = 12;
          } else if (suCount == 22) {
            suScore = 10;
          } else if (suCount == 21) {
            suScore = 9;
          } else if (suCount < 21) {
            suScore = 0;
          }
          //calculate run score male 17-21
          if (totalRunTime <= 780) {
            runScore = 100;
          } else if (totalRunTime.between(780, 787)) {
            runScore = 99;
          } else if (totalRunTime.between(786, 793)) {
            runScore = 97;
          } else if (totalRunTime.between(792, 799)) {
            runScore = 96;
          } else if (totalRunTime.between(798, 805)) {
            runScore = 94;
          } else if (totalRunTime.between(804, 811)) {
            runScore = 93;
          } else if (totalRunTime.between(810, 817)) {
            runScore = 92;
          } else if (totalRunTime.between(816, 823)) {
            runScore = 90;
          } else if (totalRunTime.between(822, 829)) {
            runScore = 89;
          } else if (totalRunTime.between(828, 835)) {
            runScore = 88;
          } else if (totalRunTime.between(834, 841)) {
            runScore = 86;
          } else if (totalRunTime.between(840, 847)) {
            runScore = 85;
          } else if (totalRunTime.between(846, 853)) {
            runScore = 83;
          } else if (totalRunTime.between(852, 859)) {
            runScore = 82;
          } else if (totalRunTime.between(858, 865)) {
            runScore = 81;
          } else if (totalRunTime.between(864, 871)) {
            runScore = 79;
          } else if (totalRunTime.between(870, 877)) {
            runScore = 78;
          } else if (totalRunTime.between(876, 883)) {
            runScore = 77;
          } else if (totalRunTime.between(882, 889)) {
            runScore = 75;
          } else if (totalRunTime.between(888, 895)) {
            runScore = 74;
          } else if (totalRunTime.between(894, 901)) {
            runScore = 72;
          } else if (totalRunTime.between(900, 907)) {
            runScore = 71;
          } else if (totalRunTime.between(906, 913)) {
            runScore = 70;
          } else if (totalRunTime.between(912, 919)) {
            runScore = 68;
          } else if (totalRunTime.between(918, 925)) {
            runScore = 67;
          } else if (totalRunTime.between(924, 931)) {
            runScore = 66;
          } else if (totalRunTime.between(930, 937)) {
            runScore = 64;
          } else if (totalRunTime.between(936, 943)) {
            runScore = 63;
          } else if (totalRunTime.between(942, 949)) {
            runScore = 61;
          } else if (totalRunTime.between(948, 955)) {
            runScore = 60;
          } else if (totalRunTime.between(954, 961)) {
            runScore = 59;
          } else if (totalRunTime.between(960, 967)) {
            runScore = 57;
          } else if (totalRunTime.between(966, 973)) {
            runScore = 56;
          } else if (totalRunTime.between(972, 979)) {
            runScore = 54;
          } else if (totalRunTime.between(978, 985)) {
            runScore = 53;
          } else if (totalRunTime.between(984, 991)) {
            runScore = 52;
          } else if (totalRunTime.between(990, 997)) {
            runScore = 50;
          } else if (totalRunTime.between(996, 1003)) {
            runScore = 49;
          } else if (totalRunTime.between(1002, 1009)) {
            runScore = 48;
          } else if (totalRunTime.between(1008, 1015)) {
            runScore = 46;
          } else if (totalRunTime.between(1014, 1021)) {
            runScore = 45;
          } else if (totalRunTime.between(1020, 1027)) {
            runScore = 43;
          } else if (totalRunTime.between(1026, 1033)) {
            runScore = 42;
          } else if (totalRunTime.between(1032, 1039)) {
            runScore = 41;
          } else if (totalRunTime.between(1038, 1045)) {
            runScore = 39;
          } else if (totalRunTime.between(1044, 1051)) {
            runScore = 38;
          } else if (totalRunTime.between(1050, 1057)) {
            runScore = 37;
          } else if (totalRunTime.between(1056, 1063)) {
            runScore = 35;
          } else if (totalRunTime.between(1062, 1069)) {
            runScore = 34;
          } else if (totalRunTime.between(1068, 1075)) {
            runScore = 32;
          } else if (totalRunTime.between(1074, 1081)) {
            runScore = 31;
          } else if (totalRunTime.between(1080, 1087)) {
            runScore = 30;
          } else if (totalRunTime.between(1086, 1093)) {
            runScore = 28;
          } else if (totalRunTime.between(1092, 1099)) {
            runScore = 27;
          } else if (totalRunTime.between(1098, 1105)) {
            runScore = 26;
          } else if (totalRunTime.between(1104, 1111)) {
            runScore = 24;
          } else if (totalRunTime.between(1110, 1117)) {
            runScore = 23;
          } else if (totalRunTime.between(1116, 1123)) {
            runScore = 21;
          } else if (totalRunTime.between(1122, 1129)) {
            runScore = 20;
          } else if (totalRunTime.between(1128, 1135)) {
            runScore = 19;
          } else if (totalRunTime.between(1134, 1141)) {
            runScore = 17;
          } else if (totalRunTime.between(1140, 1147)) {
            runScore = 16;
          } else if (totalRunTime.between(1146, 1153)) {
            runScore = 14;
          } else if (totalRunTime.between(1152, 1159)) {
            runScore = 13;
          } else if (totalRunTime.between(1158, 1165)) {
            runScore = 12;
          } else if (totalRunTime.between(1164, 1171)) {
            runScore = 10;
          } else if (totalRunTime.between(1170, 1177)) {
            runScore = 9;
          } else if (totalRunTime.between(1176, 1183)) {
            runScore = 8;
          } else if (totalRunTime.between(1182, 1189)) {
            runScore = 6;
          } else if (totalRunTime.between(1188, 1195)) {
            runScore = 5;
          } else if (totalRunTime.between(1194, 1201)) {
            runScore = 3;
          } else if (totalRunTime.between(1200, 1207)) {
            runScore = 2;
          } else if (totalRunTime.between(1206, 1213)) {
            runScore = 1;
          } else if (totalRunTime.between(1212, 1219)) {
            runScore = 0;
          } else if (totalRunTime.between(1218, 1243)) {
            runScore = 20;
          } else if (totalRunTime.between(1242, 1249)) {
            runScore = 19;
          } else if (totalRunTime.between(1248, 1255)) {
            runScore = 18;
          } else if (totalRunTime.between(1254, 1261)) {
            runScore = 17;
          } else if (totalRunTime.between(1260, 1267)) {
            runScore = 16;
          } else if (totalRunTime.between(1266, 1273)) {
            runScore = 15;
          } else if (totalRunTime.between(1272, 1279)) {
            runScore = 14;
          } else if (totalRunTime.between(1278, 1285)) {
            runScore = 12;
          } else if (totalRunTime.between(1284, 1291)) {
            runScore = 11;
          } else if (totalRunTime.between(1290, 1297)) {
            runScore = 10;
          } else if (totalRunTime.between(1296, 1303)) {
            runScore = 9;
          } else if (totalRunTime.between(1302, 1309)) {
            runScore = 8;
          } else if (totalRunTime.between(1308, 1315)) {
            runScore = 7;
          } else if (totalRunTime.between(1314, 1321)) {
            runScore = 6;
          } else if (totalRunTime.between(1320, 1327)) {
            runScore = 5;
          } else if (totalRunTime.between(1326, 1333)) {
            runScore = 4;
          } else if (totalRunTime.between(1332, 1339)) {
            runScore = 3;
          } else if (totalRunTime.between(1338, 1345)) {
            runScore = 2;
          } else if (totalRunTime.between(1344, 1351)) {
            runScore = 1;
          } else if (totalRunTime > 1350) {
            runScore = 0;
          }

        } //close male 17 - 21 age range

        if (age >= 22 && age <= 26) {
          console.log('age range is between 22 and 26');
          //Calculate pushup score male 22-26
          if (puCount >= 75) {
            puScore = 100;
          } else if (puCount == 74) {
            puScore = 99;
          } else if (puCount == 73) {
            puScore = 98;
          } else if (puCount == 72) {
            puScore = 97;
          } else if (puCount == 71) {
            puScore = 95;
          } else if (puCount == 70) {
            puScore = 94;
          } else if (puCount == 69) {
            puScore = 93;
          } else if (puCount == 68) {
            puScore = 92;
          } else if (puCount == 67) {
            puScore = 91;
          } else if (puCount == 66) {
            puScore = 90;
          } else if (puCount == 65) {
            puScore = 89;
          } else if (puCount == 64) {
            puScore = 87;
          } else if (puCount == 63) {
            puScore = 86;
          } else if (puCount == 62) {
            puScore = 85;
          } else if (puCount == 61) {
            puScore = 84;
          } else if (puCount == 60) {
            puScore = 83;
          } else if (puCount == 59) {
            puScore = 82;
          } else if (puCount == 58) {
            puScore = 81;
          } else if (puCount == 57) {
            puScore = 79;
          } else if (puCount == 56) {
            puScore = 78;
          } else if (puCount == 55) {
            puScore = 77;
          } else if (puCount == 54) {
            puScore = 76;
          } else if (puCount == 53) {
            puScore = 75;
          } else if (puCount == 52) {
            puScore = 74;
          } else if (puCount == 51) {
            puScore = 73;
          } else if (puCount == 50) {
            puScore = 71;
          } else if (puCount == 49) {
            puScore = 70;
          } else if (puCount == 48) {
            puScore = 69;
          } else if (puCount == 47) {
            puScore = 68;
          } else if (puCount == 46) {
            puScore = 67;
          } else if (puCount == 45) {
            puScore = 66;
          } else if (puCount == 44) {
            puScore = 65;
          } else if (puCount == 43) {
            puScore = 63;
          } else if (puCount == 42) {
            puScore = 62;
          } else if (puCount == 41) {
            puScore = 61;
          } else if (puCount == 40) {
            puScore = 60;
          } else if (puCount == 39) {
            puScore = 59;
          } else if (puCount == 38) {
            puScore = 58;
          } else if (puCount == 37) {
            puScore = 57;
          } else if (puCount == 36) {
            puScore = 55;
          } else if (puCount == 35) {
            puScore = 54;
          } else if (puCount == 34) {
            puScore = 53;
          } else if (puCount == 33) {
            puScore = 52;
          } else if (puCount == 32) {
            puScore = 51;
          } else if (puCount == 31) {
            puScore = 50;
          } else if (puCount == 30) {
            puScore = 49;
          } else if (puCount == 29) {
            puScore = 47;
          } else if (puCount == 28) {
            puScore = 46;
          } else if (puCount == 27) {
            puScore = 45;
          } else if (puCount == 26) {
            puScore = 44;
          } else if (puCount == 25) {
            puScore = 43;
          } else if (puCount == 24) {
            puScore = 42;
          } else if (puCount == 23) {
            puScore = 41;
          } else if (puCount == 22) {
            puScore = 39;
          } else if (puCount == 21) {
            puScore = 38;
          } else if (puCount == 20) {
            puScore = 37;
          } else if (puCount == 19) {
            puScore = 36;
          } else if (puCount == 18) {
            puScore = 35;
          } else if (puCount == 17) {
            puScore = 34;
          } else if (puCount == 16) {
            puScore = 33;
          } else if (puCount == 15) {
            puScore = 31;
          } else if (puCount == 14) {
            puScore = 30;
          } else if (puCount == 13) {
            puScore = 29;
          } else if (puCount == 12) {
            puScore = 28;
          } else if (puCount == 11) {
            puScore = 27;
          } else if (puCount == 10) {
            puScore = 26;
          } else if (puCount == 9) {
            puScore = 25;
          } else if (puCount == 8) {
            puScore = 23;
          } else if (puCount == 7) {
            puScore = 22;
          } else if (puCount == 6) {
            puScore = 21;
          } else if (puCount == 5) {
            puScore = 20;
          } else if (puCount == 4) {
            puScore = 19;
          } else if (puCount == 3) {
            puScore = 18;
          } else if (puCount == 2) {
            puScore = 17;
          } else if (puCount == 1) {
            puScore = 16;
          } else if (puCount == 0) {
            puScore = 0;
          }
          //calculate situp score male 22-26
          if (suCount >= 80) {
            suScore = 100;
          } else if (suCount == 79) {
            suScore = 99;
          } else if (suCount == 78) {
            suScore = 97;
          } else if (suCount == 77) {
            suScore = 96;
          } else if (suCount == 76) {
            suScore = 95;
          } else if (suCount == 75) {
            suScore = 93;
          } else if (suCount == 74) {
            suScore = 92;
          } else if (suCount == 73) {
            suScore = 91;
          } else if (suCount == 72) {
            suScore = 89;
          } else if (suCount == 71) {
            suScore = 88;
          } else if (suCount == 70) {
            suScore = 87;
          } else if (suCount == 69) {
            suScore = 85;
          } else if (suCount == 68) {
            suScore = 84;
          } else if (suCount == 67) {
            suScore = 83;
          } else if (suCount == 66) {
            suScore = 81;
          } else if (suCount == 65) {
            suScore = 80;
          } else if (suCount == 64) {
            suScore = 79;
          } else if (suCount == 63) {
            suScore = 77;
          } else if (suCount == 62) {
            suScore = 76;
          } else if (suCount == 61) {
            suScore = 75;
          } else if (suCount == 60) {
            suScore = 73;
          } else if (suCount == 59) {
            suScore = 72;
          } else if (suCount == 58) {
            suScore = 71;
          } else if (suCount == 57) {
            suScore = 69;
          } else if (suCount == 56) {
            suScore = 68;
          } else if (suCount == 55) {
            suScore = 67;
          } else if (suCount == 54) {
            suScore = 65;
          } else if (suCount == 53) {
            suScore = 64;
          } else if (suCount == 52) {
            suScore = 63;
          } else if (suCount == 51) {
            suScore = 61;
          } else if (suCount == 50) {
            suScore = 60;
          } else if (suCount == 49) {
            suScore = 59;
          } else if (suCount == 48) {
            suScore = 57;
          } else if (suCount == 47) {
            suScore = 56;
          } else if (suCount == 46) {
            suScore = 55;
          } else if (suCount == 45) {
            suScore = 53;
          } else if (suCount == 44) {
            suScore = 52;
          } else if (suCount == 43) {
            suScore = 50;
          } else if (suCount == 42) {
            suScore = 49;
          } else if (suCount == 41) {
            suScore = 48;
          } else if (suCount == 40) {
            suScore = 47;
          } else if (suCount == 39) {
            suScore = 45;
          } else if (suCount == 38) {
            suScore = 44;
          } else if (suCount == 37) {
            suScore = 43;
          } else if (suCount == 36) {
            suScore = 41;
          } else if (suCount == 35) {
            suScore = 40;
          } else if (suCount == 34) {
            suScore = 39;
          } else if (suCount == 33) {
            suScore = 37;
          } else if (suCount == 32) {
            suScore = 36;
          } else if (suCount == 31) {
            suScore = 35;
          } else if (suCount == 30) {
            suScore = 33;
          } else if (suCount == 29) {
            suScore = 32;
          } else if (suCount == 28) {
            suScore = 31;
          } else if (suCount == 27) {
            suScore = 29;
          } else if (suCount == 26) {
            suScore = 28;
          } else if (suCount == 25) {
            suScore = 27;
          } else if (suCount == 24) {
            suScore = 25;
          } else if (suCount == 23) {
            suScore = 24;
          } else if (suCount == 22) {
            suScore = 23;
          } else if (suCount == 21) {
            suScore = 21;
          } else if (suCount == 22) {
            suScore = 35;
          } else if (suCount == 21) {
            suScore = 34;
          } else if (suCount < 21) {
            suScore = 0;
          }
          //calculate run score male 22-26
          if (totalRunTime <= 780) {
            runScore = 100;
          } else if (totalRunTime.between(780, 787)) {
            runScore = 99;
          } else if (totalRunTime.between(786, 793)) {
            runScore = 98;
          } else if (totalRunTime.between(792, 799)) {
            runScore = 97;
          } else if (totalRunTime.between(798, 805)) {
            runScore = 96;
          } else if (totalRunTime.between(804, 811)) {
            runScore = 94;
          } else if (totalRunTime.between(810, 817)) {
            runScore = 93;
          } else if (totalRunTime.between(816, 823)) {
            runScore = 92;
          } else if (totalRunTime.between(822, 829)) {
            runScore = 91;
          } else if (totalRunTime.between(828, 835)) {
            runScore = 90;
          } else if (totalRunTime.between(834, 841)) {
            runScore = 89;
          } else if (totalRunTime.between(840, 847)) {
            runScore = 88;
          } else if (totalRunTime.between(846, 853)) {
            runScore = 87;
          } else if (totalRunTime.between(852, 859)) {
            runScore = 86;
          } else if (totalRunTime.between(858, 865)) {
            runScore = 84;
          } else if (totalRunTime.between(864, 871)) {
            runScore = 83;
          } else if (totalRunTime.between(870, 877)) {
            runScore = 82;
          } else if (totalRunTime.between(876, 883)) {
            runScore = 81;
          } else if (totalRunTime.between(882, 889)) {
            runScore = 80;
          } else if (totalRunTime.between(888, 895)) {
            runScore = 79;
          } else if (totalRunTime.between(894, 901)) {
            runScore = 78;
          } else if (totalRunTime.between(900, 907)) {
            runScore = 77;
          } else if (totalRunTime.between(906, 913)) {
            runScore = 76;
          } else if (totalRunTime.between(912, 919)) {
            runScore = 74;
          } else if (totalRunTime.between(918, 925)) {
            runScore = 73;
          } else if (totalRunTime.between(924, 931)) {
            runScore = 72;
          } else if (totalRunTime.between(930, 937)) {
            runScore = 71;
          } else if (totalRunTime.between(936, 943)) {
            runScore = 70;
          } else if (totalRunTime.between(942, 949)) {
            runScore = 69;
          } else if (totalRunTime.between(948, 955)) {
            runScore = 68;
          } else if (totalRunTime.between(954, 961)) {
            runScore = 67;
          } else if (totalRunTime.between(960, 967)) {
            runScore = 66;
          } else if (totalRunTime.between(966, 973)) {
            runScore = 64;
          } else if (totalRunTime.between(972, 979)) {
            runScore = 63;
          } else if (totalRunTime.between(978, 985)) {
            runScore = 62;
          } else if (totalRunTime.between(984, 991)) {
            runScore = 61;
          } else if (totalRunTime.between(990, 997)) {
            runScore = 60;
          } else if (totalRunTime.between(996, 1003)) {
            runScore = 59;
          } else if (totalRunTime.between(1002, 1009)) {
            runScore = 58;
          } else if (totalRunTime.between(1008, 1015)) {
            runScore = 57;
          } else if (totalRunTime.between(1014, 1021)) {
            runScore = 56;
          } else if (totalRunTime.between(1020, 1027)) {
            runScore = 54;
          } else if (totalRunTime.between(1026, 1033)) {
            runScore = 53;
          } else if (totalRunTime.between(1032, 1039)) {
            runScore = 52;
          } else if (totalRunTime.between(1038, 1045)) {
            runScore = 51;
          } else if (totalRunTime.between(1044, 1051)) {
            runScore = 50;
          } else if (totalRunTime.between(1050, 1057)) {
            runScore = 49;
          } else if (totalRunTime.between(1056, 1063)) {
            runScore = 48;
          } else if (totalRunTime.between(1062, 1069)) {
            runScore = 47;
          } else if (totalRunTime.between(1068, 1075)) {
            runScore = 46;
          } else if (totalRunTime.between(1074, 1081)) {
            runScore = 44;
          } else if (totalRunTime.between(1080, 1087)) {
            runScore = 43;
          } else if (totalRunTime.between(1086, 1093)) {
            runScore = 42;
          } else if (totalRunTime.between(1092, 1099)) {
            runScore = 41;
          } else if (totalRunTime.between(1098, 1105)) {
            runScore = 40;
          } else if (totalRunTime.between(1104, 1111)) {
            runScore = 39;
          } else if (totalRunTime.between(1110, 1117)) {
            runScore = 38;
          } else if (totalRunTime.between(1116, 1123)) {
            runScore = 37;
          } else if (totalRunTime.between(1122, 1129)) {
            runScore = 36;
          } else if (totalRunTime.between(1128, 1135)) {
            runScore = 34;
          } else if (totalRunTime.between(1134, 1141)) {
            runScore = 33;
          } else if (totalRunTime.between(1140, 1147)) {
            runScore = 32;
          } else if (totalRunTime.between(1146, 1153)) {
            runScore = 31;
          } else if (totalRunTime.between(1152, 1159)) {
            runScore = 30;
          } else if (totalRunTime.between(1158, 1165)) {
            runScore = 29;
          } else if (totalRunTime.between(1164, 1171)) {
            runScore = 28;
          } else if (totalRunTime.between(1170, 1177)) {
            runScore = 27;
          } else if (totalRunTime.between(1176, 1183)) {
            runScore = 26;
          } else if (totalRunTime.between(1182, 1189)) {
            runScore = 24;
          } else if (totalRunTime.between(1188, 1195)) {
            runScore = 23;
          } else if (totalRunTime.between(1194, 1201)) {
            runScore = 22;
          } else if (totalRunTime.between(1200, 1207)) {
            runScore = 21;
          } else if (totalRunTime.between(1206, 1213)) {
            runScore = 20;
          } else if (totalRunTime.between(1212, 1219)) {
            runScore = 19;
          } else if (totalRunTime.between(1218, 1225)) {
            runScore = 18;
          } else if (totalRunTime.between(1224, 1231)) {
            runScore = 17;
          } else if (totalRunTime.between(1230, 1237)) {
            runScore = 16;
          } else if (totalRunTime.between(1236, 1243)) {
            runScore = 14;
          } else if (totalRunTime.between(1242, 1249)) {
            runScore = 13;
          } else if (totalRunTime.between(1248, 1255)) {
            runScore = 12;
          } else if (totalRunTime.between(1254, 1261)) {
            runScore = 11;
          } else if (totalRunTime.between(1260, 1267)) {
            runScore = 10;
          } else if (totalRunTime.between(1266, 1273)) {
            runScore = 9;
          } else if (totalRunTime.between(1272, 1279)) {
            runScore = 8;
          } else if (totalRunTime.between(1278, 1285)) {
            runScore = 7;
          } else if (totalRunTime.between(1284, 1291)) {
            runScore = 6;
          } else if (totalRunTime.between(1290, 1297)) {
            runScore = 4;
          } else if (totalRunTime.between(1296, 1303)) {
            runScore = 3;
          } else if (totalRunTime.between(1302, 1309)) {
            runScore = 2;
          } else if (totalRunTime.between(1308, 1315)) {
            runScore = 1;
          } else if (totalRunTime > 1314) {
            runScore = 0;
          }
        } //close male 22 - 26 age range

        if (age >= 27 && age <= 31) {
          console.log('age range is between 27 and 31');
          //calculate pushup score male 27-31
          if (puCount >= 77) {
            puScore = 100;
          } else if (puCount == 76) {
            puScore = 99;
          } else if (puCount == 75) {
            puScore = 98;
          } else if (puCount == 74) {
            puScore = 97;
          } else if (puCount == 73) {
            puScore = 96;
          } else if (puCount == 72) {
            puScore = 95;
          } else if (puCount == 71) {
            puScore = 94;
          } else if (puCount == 70) {
            puScore = 93;
          } else if (puCount == 69) {
            puScore = 92;
          } else if (puCount == 68) {
            puScore = 91;
          } else if (puCount == 67) {
            puScore = 89;
          } else if (puCount == 66) {
            puScore = 88;
          } else if (puCount == 65) {
            puScore = 87;
          } else if (puCount == 64) {
            puScore = 86;
          } else if (puCount == 63) {
            puScore = 85;
          } else if (puCount == 62) {
            puScore = 84;
          } else if (puCount == 61) {
            puScore = 83;
          } else if (puCount == 60) {
            puScore = 82;
          } else if (puCount == 59) {
            puScore = 81;
          } else if (puCount == 58) {
            puScore = 80;
          } else if (puCount == 57) {
            puScore = 79;
          } else if (puCount == 56) {
            puScore = 78;
          } else if (puCount == 55) {
            puScore = 77;
          } else if (puCount == 54) {
            puScore = 76;
          } else if (puCount == 53) {
            puScore = 75;
          } else if (puCount == 52) {
            puScore = 74;
          } else if (puCount == 51) {
            puScore = 73;
          } else if (puCount == 50) {
            puScore = 72;
          } else if (puCount == 49) {
            puScore = 71;
          } else if (puCount == 48) {
            puScore = 69;
          } else if (puCount == 47) {
            puScore = 68;
          } else if (puCount == 46) {
            puScore = 67;
          } else if (puCount == 45) {
            puScore = 66;
          } else if (puCount == 44) {
            puScore = 65;
          } else if (puCount == 43) {
            puScore = 64;
          } else if (puCount == 42) {
            puScore = 63;
          } else if (puCount == 41) {
            puScore = 62;
          } else if (puCount == 40) {
            puScore = 61;
          } else if (puCount == 39) {
            puScore = 60;
          } else if (puCount == 38) {
            puScore = 59;
          } else if (puCount == 37) {
            puScore = 58;
          } else if (puCount == 36) {
            puScore = 57;
          } else if (puCount == 35) {
            puScore = 56;
          } else if (puCount == 34) {
            puScore = 55;
          } else if (puCount == 33) {
            puScore = 54;
          } else if (puCount == 32) {
            puScore = 53;
          } else if (puCount == 31) {
            puScore = 52;
          } else if (puCount == 30) {
            puScore = 50;
          } else if (puCount == 29) {
            puScore = 49;
          } else if (puCount == 28) {
            puScore = 48;
          } else if (puCount == 27) {
            puScore = 47;
          } else if (puCount == 26) {
            puScore = 46;
          } else if (puCount == 25) {
            puScore = 45;
          } else if (puCount == 24) {
            puScore = 44;
          } else if (puCount == 23) {
            puScore = 43;
          } else if (puCount == 22) {
            puScore = 42;
          } else if (puCount == 21) {
            puScore = 41;
          } else if (puCount == 20) {
            puScore = 40;
          } else if (puCount == 19) {
            puScore = 39;
          } else if (puCount == 18) {
            puScore = 38;
          } else if (puCount == 17) {
            puScore = 37;
          } else if (puCount == 16) {
            puScore = 36;
          } else if (puCount == 15) {
            puScore = 35;
          } else if (puCount == 14) {
            puScore = 34;
          } else if (puCount == 13) {
            puScore = 33;
          } else if (puCount == 12) {
            puScore = 32;
          } else if (puCount == 11) {
            puScore = 31;
          } else if (puCount == 10) {
            puScore = 29;
          } else if (puCount == 9) {
            puScore = 28;
          } else if (puCount == 8) {
            puScore = 27;
          } else if (puCount == 7) {
            puScore = 26;
          } else if (puCount == 6) {
            puScore = 25;
          } else if (puCount == 5) {
            puScore = 24;
          } else if (puCount == 4) {
            puScore = 23;
          } else if (puCount == 3) {
            puScore = 22;
          } else if (puCount == 2) {
            puScore = 21;
          } else if (puCount == 1) {
            puScore = 20;
          } else if (puCount < 1) {
            puScore = 0;
          }
          //calculate situp score male 27-31
          if (suCount >= 82) {
            suScore = 100;
          } else if (suCount == 81) {
            suScore = 99;
          } else if (suCount == 80) {
            suScore = 98;
          } else if (suCount == 79) {
            suScore = 97;
          } else if (suCount == 78) {
            suScore = 96;
          } else if (suCount == 77) {
            suScore = 95;
          } else if (suCount == 76) {
            suScore = 94;
          } else if (suCount == 75) {
            suScore = 92;
          } else if (suCount == 74) {
            suScore = 91;
          } else if (suCount == 73) {
            suScore = 90;
          } else if (suCount == 72) {
            suScore = 89;
          } else if (suCount == 71) {
            suScore = 88;
          } else if (suCount == 70) {
            suScore = 87;
          } else if (suCount == 69) {
            suScore = 86;
          } else if (suCount == 68) {
            suScore = 85;
          } else if (suCount == 67) {
            suScore = 84;
          } else if (suCount == 66) {
            suScore = 83;
          } else if (suCount == 65) {
            suScore = 82;
          } else if (suCount == 64) {
            suScore = 81;
          } else if (suCount == 63) {
            suScore = 79;
          } else if (suCount == 62) {
            suScore = 78;
          } else if (suCount == 61) {
            suScore = 77;
          } else if (suCount == 60) {
            suScore = 76;
          } else if (suCount == 59) {
            suScore = 75;
          } else if (suCount == 58) {
            suScore = 74;
          } else if (suCount == 57) {
            suScore = 73;
          } else if (suCount == 56) {
            suScore = 72;
          } else if (suCount == 55) {
            suScore = 71;
          } else if (suCount == 54) {
            suScore = 70;
          } else if (suCount == 53) {
            suScore = 69;
          } else if (suCount == 52) {
            suScore = 68;
          } else if (suCount == 51) {
            suScore = 66;
          } else if (suCount == 50) {
            suScore = 65;
          } else if (suCount == 49) {
            suScore = 64;
          } else if (suCount == 48) {
            suScore = 63;
          } else if (suCount == 47) {
            suScore = 62;
          } else if (suCount == 46) {
            suScore = 61;
          } else if (suCount == 45) {
            suScore = 60;
          } else if (suCount == 44) {
            suScore = 59;
          } else if (suCount == 43) {
            suScore = 58;
          } else if (suCount == 42) {
            suScore = 57;
          } else if (suCount == 41) {
            suScore = 56;
          } else if (suCount == 40) {
            suScore = 55;
          } else if (suCount == 39) {
            suScore = 54;
          } else if (suCount == 38) {
            suScore = 52;
          } else if (suCount == 37) {
            suScore = 51;
          } else if (suCount == 36) {
            suScore = 50;
          } else if (suCount == 35) {
            suScore = 49;
          } else if (suCount == 34) {
            suScore = 48;
          } else if (suCount == 33) {
            suScore = 47;
          } else if (suCount == 32) {
            suScore = 46;
          } else if (suCount == 31) {
            suScore = 45;
          } else if (suCount == 30) {
            suScore = 44;
          } else if (suCount == 29) {
            suScore = 43;
          } else if (suCount == 28) {
            suScore = 42;
          } else if (suCount == 27) {
            suScore = 41;
          } else if (suCount == 26) {
            suScore = 39;
          } else if (suCount == 25) {
            suScore = 38;
          } else if (suCount == 24) {
            suScore = 37;
          } else if (suCount == 23) {
            suScore = 36;
          } else if (suCount == 22) {
            suScore = 35;
          } else if (suCount == 21) {
            suScore = 34;
          } else if (suCount < 21) {
            suScore = 0;
          }
          //calculate run score male 27-31
          if (totalRunTime <= 780) {
            runScore = 100;
          } else if (totalRunTime.between(798, 805)) {
            runScore = 99;
          } else if (totalRunTime.between(804, 811)) {
            runScore = 98;
          } else if (totalRunTime.between(810, 817)) {
            runScore = 97;
          } else if (totalRunTime.between(816, 823)) {
            runScore = 96;
          } else if (totalRunTime.between(822, 829)) {
            runScore = 95;
          } else if (totalRunTime.between(828, 835)) {
            runScore = 94;
          } else if (totalRunTime.between(828, 835)) {
            runScore = 94;
          } else if (totalRunTime.between(834, 841)) {
            runScore = 92;
          } else if (totalRunTime.between(840, 847)) {
            runScore = 91;
          } else if (totalRunTime.between(846, 853)) {
            runScore = 90;
          } else if (totalRunTime.between(852, 859)) {
            runScore = 89;
          } else if (totalRunTime.between(858, 865)) {
            runScore = 88;
          } else if (totalRunTime.between(864, 871)) {
            runScore = 87;
          } else if (totalRunTime.between(870, 877)) {
            runScore = 86;
          } else if (totalRunTime.between(876, 883)) {
            runScore = 85;
          } else if (totalRunTime.between(882, 889)) {
            runScore = 84;
          } else if (totalRunTime.between(888, 895)) {
            runScore = 83;
          } else if (totalRunTime.between(894, 901)) {
            runScore = 82;
          } else if (totalRunTime.between(900, 907)) {
            runScore = 81;
          } else if (totalRunTime.between(906, 913)) {
            runScore = 79;
          } else if (totalRunTime.between(912, 919)) {
            runScore = 78;
          } else if (totalRunTime.between(918, 925)) {
            runScore = 77;
          } else if (totalRunTime.between(924, 931)) {
            runScore = 76;
          } else if (totalRunTime.between(930, 937)) {
            runScore = 75;
          } else if (totalRunTime.between(936, 943)) {
            runScore = 74;
          } else if (totalRunTime.between(942, 949)) {
            runScore = 73;
          } else if (totalRunTime.between(948, 955)) {
            runScore = 72;
          } else if (totalRunTime.between(954, 961)) {
            runScore = 71;
          } else if (totalRunTime.between(960, 967)) {
            runScore = 70;
          } else if (totalRunTime.between(966, 973)) {
            runScore = 69;
          } else if (totalRunTime.between(972, 979)) {
            runScore = 68;
          } else if (totalRunTime.between(978, 985)) {
            runScore = 66;
          } else if (totalRunTime.between(984, 991)) {
            runScore = 65;
          } else if (totalRunTime.between(990, 997)) {
            runScore = 64;
          } else if (totalRunTime.between(996, 1003)) {
            runScore = 63;
          } else if (totalRunTime.between(1002, 1009)) {
            runScore = 62;
          } else if (totalRunTime.between(1008, 1015)) {
            runScore = 61;
          } else if (totalRunTime.between(1014, 1021)) {
            runScore = 60;
          } else if (totalRunTime.between(1020, 1027)) {
            runScore = 59;
          } else if (totalRunTime.between(1026, 1033)) {
            runScore = 58;
          } else if (totalRunTime.between(1032, 1039)) {
            runScore = 57;
          } else if (totalRunTime.between(1038, 1045)) {
            runScore = 56;
          } else if (totalRunTime.between(1044, 1051)) {
            runScore = 55;
          } else if (totalRunTime.between(1050, 1057)) {
            runScore = 54;
          } else if (totalRunTime.between(1056, 1063)) {
            runScore = 52;
          } else if (totalRunTime.between(1062, 1069)) {
            runScore = 51;
          } else if (totalRunTime.between(1068, 1075)) {
            runScore = 50;
          } else if (totalRunTime.between(1074, 1081)) {
            runScore = 49;
          } else if (totalRunTime.between(1080, 1087)) {
            runScore = 48;
          } else if (totalRunTime.between(1086, 1093)) {
            runScore = 47;
          } else if (totalRunTime.between(1092, 1099)) {
            runScore = 46;
          } else if (totalRunTime.between(1098, 1105)) {
            runScore = 45;
          } else if (totalRunTime.between(1104, 1111)) {
            runScore = 44;
          } else if (totalRunTime.between(1110, 1117)) {
            runScore = 43;
          } else if (totalRunTime.between(1116, 1123)) {
            runScore = 42;
          } else if (totalRunTime.between(1122, 1129)) {
            runScore = 41;
          } else if (totalRunTime.between(1128, 1135)) {
            runScore = 39;
          } else if (totalRunTime.between(1134, 1141)) {
            runScore = 38;
          } else if (totalRunTime.between(1140, 1147)) {
            runScore = 37;
          } else if (totalRunTime.between(1146, 1153)) {
            runScore = 36;
          } else if (totalRunTime.between(1152, 1159)) {
            runScore = 35;
          } else if (totalRunTime.between(1158, 1165)) {
            runScore = 34;
          } else if (totalRunTime.between(1164, 1171)) {
            runScore = 33;
          } else if (totalRunTime.between(1170, 1177)) {
            runScore = 32;
          } else if (totalRunTime.between(1176, 1183)) {
            runScore = 31;
          } else if (totalRunTime.between(1182, 1189)) {
            runScore = 30;
          } else if (totalRunTime.between(1188, 1195)) {
            runScore = 29;
          } else if (totalRunTime.between(1194, 1201)) {
            runScore = 28;
          } else if (totalRunTime.between(1200, 1207)) {
            runScore = 26;
          } else if (totalRunTime.between(1206, 1213)) {
            runScore = 25;
          } else if (totalRunTime.between(1212, 1219)) {
            runScore = 24;
          } else if (totalRunTime.between(1218, 1225)) {
            runScore = 23;
          } else if (totalRunTime.between(1224, 1231)) {
            runScore = 22;
          } else if (totalRunTime.between(1230, 1237)) {
            runScore = 21;
          } else if (totalRunTime.between(1236, 1243)) {
            runScore = 20;
          } else if (totalRunTime.between(1242, 1249)) {
            runScore = 19;
          } else if (totalRunTime.between(1248, 1255)) {
            runScore = 18;
          } else if (totalRunTime.between(1254, 1261)) {
            runScore = 17;
          } else if (totalRunTime.between(1260, 1267)) {
            runScore = 16;
          } else if (totalRunTime.between(1266, 1273)) {
            runScore = 15;
          } else if (totalRunTime.between(1272, 1279)) {
            runScore = 14;
          } else if (totalRunTime.between(1278, 1285)) {
            runScore = 12;
          } else if (totalRunTime.between(1284, 1291)) {
            runScore = 11;
          } else if (totalRunTime.between(1290, 1297)) {
            runScore = 10;
          } else if (totalRunTime.between(1296, 1303)) {
            runScore = 9;
          } else if (totalRunTime.between(1302, 1309)) {
            runScore = 8;
          } else if (totalRunTime.between(1308, 1315)) {
            runScore = 7;
          } else if (totalRunTime.between(1314, 1321)) {
            runScore = 6;
          } else if (totalRunTime.between(1320, 1327)) {
            runScore = 5;
          } else if (totalRunTime.between(1326, 1333)) {
            runScore = 4;
          } else if (totalRunTime.between(1332, 1339)) {
            runScore = 3;
          } else if (totalRunTime.between(1338, 1345)) {
            runScore = 2;
          } else if (totalRunTime.between(1344, 1351)) {
            runScore = 1;
          } else if (totalRunTime.between(1350, 1357)) {
            runScore = 0;
          } else if (totalRunTime >= 1356) {
            runScore = 0;
          }

        } //close 27 - 31 age range

        if (age >= 32 && age <= 36) {
          console.log('age range is between 32 and 36');
          //calculate pushup score male 32-36
          if (puCount >= 75) {
            puScore = 100;
          } else if (puCount == 74) {
            puScore = 99;
          } else if (puCount == 73) {
            puScore = 98;
          } else if (puCount == 72) {
            puScore = 97;
          } else if (puCount == 71) {
            puScore = 96;
          } else if (puCount == 70) {
            puScore = 95;
          } else if (puCount == 69) {
            puScore = 94;
          } else if (puCount == 68) {
            puScore = 93;
          } else if (puCount == 67) {
            puScore = 92;
          } else if (puCount == 66) {
            puScore = 91;
          } else if (puCount == 65) {
            puScore = 90;
          } else if (puCount == 64) {
            puScore = 89;
          } else if (puCount == 63) {
            puScore = 88;
          } else if (puCount == 62) {
            puScore = 87;
          } else if (puCount == 61) {
            puScore = 86;
          } else if (puCount == 60) {
            puScore = 85;
          } else if (puCount == 59) {
            puScore = 84;
          } else if (puCount == 58) {
            puScore = 83;
          } else if (puCount == 57) {
            puScore = 82;
          } else if (puCount == 56) {
            puScore = 81;
          } else if (puCount == 55) {
            puScore = 79;
          } else if (puCount == 54) {
            puScore = 78;
          } else if (puCount == 53) {
            puScore = 77;
          } else if (puCount == 52) {
            puScore = 76;
          } else if (puCount == 51) {
            puScore = 75;
          } else if (puCount == 50) {
            puScore = 74;
          } else if (puCount == 49) {
            puScore = 73;
          } else if (puCount == 48) {
            puScore = 72;
          } else if (puCount == 47) {
            puScore = 71;
          } else if (puCount == 46) {
            puScore = 70;
          } else if (puCount == 45) {
            puScore = 69;
          } else if (puCount == 44) {
            puScore = 68;
          } else if (puCount == 43) {
            puScore = 67;
          } else if (puCount == 42) {
            puScore = 66;
          } else if (puCount == 41) {
            puScore = 65;
          } else if (puCount == 40) {
            puScore = 64;
          } else if (puCount == 39) {
            puScore = 63;
          } else if (puCount == 38) {
            puScore = 62;
          } else if (puCount == 37) {
            puScore = 61;
          } else if (puCount == 36) {
            puScore = 60;
          } else if (puCount == 35) {
            puScore = 59;
          } else if (puCount == 34) {
            puScore = 58;
          } else if (puCount == 33) {
            puScore = 57;
          } else if (puCount == 32) {
            puScore = 56;
          } else if (puCount == 31) {
            puScore = 55;
          } else if (puCount == 30) {
            puScore = 54;
          } else if (puCount == 29) {
            puScore = 53;
          } else if (puCount == 28) {
            puScore = 52;
          } else if (puCount == 27) {
            puScore = 51;
          } else if (puCount == 26) {
            puScore = 50;
          } else if (puCount == 25) {
            puScore = 49;
          } else if (puCount == 24) {
            puScore = 48;
          } else if (puCount == 23) {
            puScore = 47;
          } else if (puCount == 22) {
            puScore = 46;
          } else if (puCount == 21) {
            puScore = 45;
          } else if (puCount == 20) {
            puScore = 44;
          } else if (puCount == 19) {
            puScore = 43;
          } else if (puCount == 18) {
            puScore = 42;
          } else if (puCount == 17) {
            puScore = 41;
          } else if (puCount == 16) {
            puScore = 39;
          } else if (puCount == 15) {
            puScore = 38;
          } else if (puCount == 14) {
            puScore = 37;
          } else if (puCount == 13) {
            puScore = 36;
          } else if (puCount == 12) {
            puScore = 35;
          } else if (puCount == 11) {
            puScore = 34;
          } else if (puCount == 10) {
            puScore = 33;
          } else if (puCount == 9) {
            puScore = 32;
          } else if (puCount == 8) {
            puScore = 31;
          } else if (puCount == 7) {
            puScore = 30;
          } else if (puCount == 6) {
            puScore = 29;
          } else if (puCount == 5) {
            puScore = 28;
          } else if (puCount == 4) {
            puScore = 27;
          } else if (puCount == 3) {
            puScore = 26;
          } else if (puCount == 2) {
            puScore = 25;
          } else if (puCount == 1) {
            puScore = 24;
          } else if (puCount == 0) {
            puScore = 0;
          }
          //calculate situp score male 32-36
          if (suCount >= 76) {
            suScore = 100;
          } else if (suCount == 75) {
            suScore = 99;
          } else if (suCount == 74) {
            suScore = 98;
          } else if (suCount == 73) {
            suScore = 96;
          } else if (suCount == 72) {
            suScore = 95;
          } else if (suCount == 71) {
            suScore = 94;
          } else if (suCount == 70) {
            suScore = 93;
          } else if (suCount == 69) {
            suScore = 92;
          } else if (suCount == 68) {
            suScore = 91;
          } else if (suCount == 67) {
            suScore = 89;
          } else if (suCount == 66) {
            suScore = 88;
          } else if (suCount == 65) {
            suScore = 87;
          } else if (suCount == 64) {
            suScore = 86;
          } else if (suCount == 63) {
            suScore = 85;
          } else if (suCount == 62) {
            suScore = 84;
          } else if (suCount == 61) {
            suScore = 82;
          } else if (suCount == 60) {
            suScore = 81;
          } else if (suCount == 59) {
            suScore = 80;
          } else if (suCount == 58) {
            suScore = 79;
          } else if (suCount == 57) {
            suScore = 78;
          } else if (suCount == 56) {
            suScore = 76;
          } else if (suCount == 55) {
            suScore = 75;
          } else if (suCount == 54) {
            suScore = 74;
          } else if (suCount == 53) {
            suScore = 73;
          } else if (suCount == 52) {
            suScore = 72;
          } else if (suCount == 51) {
            suScore = 71;
          } else if (suCount == 50) {
            suScore = 69;
          } else if (suCount == 49) {
            suScore = 68;
          } else if (suCount == 48) {
            suScore = 67;
          } else if (suCount == 47) {
            suScore = 66;
          } else if (suCount == 46) {
            suScore = 65;
          } else if (suCount == 45) {
            suScore = 64;
          } else if (suCount == 44) {
            suScore = 62;
          } else if (suCount == 43) {
            suScore = 61;
          } else if (suCount == 42) {
            suScore = 60;
          } else if (suCount == 41) {
            suScore = 59;
          } else if (suCount == 40) {
            suScore = 58;
          } else if (suCount == 39) {
            suScore = 56;
          } else if (suCount == 38) {
            suScore = 55;
          } else if (suCount == 37) {
            suScore = 54;
          } else if (suCount == 36) {
            suScore = 53;
          } else if (suCount == 35) {
            suScore = 52;
          } else if (suCount == 34) {
            suScore = 50;
          } else if (suCount == 33) {
            suScore = 49;
          } else if (suCount == 32) {
            suScore = 48;
          } else if (suCount == 31) {
            suScore = 47;
          } else if (suCount == 30) {
            suScore = 46;
          } else if (suCount == 29) {
            suScore = 45;
          } else if (suCount == 28) {
            suScore = 44;
          } else if (suCount == 27) {
            suScore = 42;
          } else if (suCount == 26) {
            suScore = 41;
          } else if (suCount == 25) {
            suScore = 40;
          } else if (suCount == 24) {
            suScore = 39;
          } else if (suCount == 23) {
            suScore = 38;
          } else if (suCount == 22) {
            suScore = 36;
          } else if (suCount == 21) {
            suScore = 35;
          } else if (suCount < 21) {
            suScore = 0;
          }
          //calculate run score male 32-36
          if (totalRunTime <= 798) {
            runScore = 100;
          } else if (totalRunTime.between(798, 805)) {
            runScore = 99;
          } else if (totalRunTime.between(804, 811)) {
            runScore = 98;
          } else if (totalRunTime.between(810, 817)) {
            runScore = 97;
          } else if (totalRunTime.between(816, 823)) {
            runScore = 96;
          } else if (totalRunTime.between(822, 829)) {
            runScore = 95;
          } else if (totalRunTime.between(828, 835)) {
            runScore = 95;
          } else if (totalRunTime.between(834, 841)) {
            runScore = 94;
          } else if (totalRunTime.between(840, 847)) {
            runScore = 93;
          } else if (totalRunTime.between(846, 853)) {
            runScore = 92;
          } else if (totalRunTime.between(852, 859)) {
            runScore = 91;
          } else if (totalRunTime.between(858, 865)) {
            runScore = 90;
          } else if (totalRunTime.between(864, 871)) {
            runScore = 89;
          } else if (totalRunTime.between(870, 877)) {
            runScore = 88;
          } else if (totalRunTime.between(876, 883)) {
            runScore = 87;
          } else if (totalRunTime.between(882, 889)) {
            runScore = 86;
          } else if (totalRunTime.between(888, 895)) {
            runScore = 85;
          } else if (totalRunTime.between(894, 901)) {
            runScore = 85;
          } else if (totalRunTime.between(900, 907)) {
            runScore = 84;
          } else if (totalRunTime.between(906, 913)) {
            runScore = 83;
          } else if (totalRunTime.between(912, 919)) {
            runScore = 82;
          } else if (totalRunTime.between(918, 925)) {
            runScore = 81;
          } else if (totalRunTime.between(924, 931)) {
            runScore = 80;
          } else if (totalRunTime.between(930, 937)) {
            runScore = 79;
          } else if (totalRunTime.between(936, 943)) {
            runScore = 78;
          } else if (totalRunTime.between(942, 949)) {
            runScore = 77;
          } else if (totalRunTime.between(948, 955)) {
            runScore = 76;
          } else if (totalRunTime.between(954, 961)) {
            runScore = 75;
          } else if (totalRunTime.between(960, 967)) {
            runScore = 75;
          } else if (totalRunTime.between(966, 973)) {
            runScore = 74;
          } else if (totalRunTime.between(972, 979)) {
            runScore = 73;
          } else if (totalRunTime.between(978, 985)) {
            runScore = 72;
          } else if (totalRunTime.between(984, 991)) {
            runScore = 71;
          } else if (totalRunTime.between(990, 997)) {
            runScore = 70;
          } else if (totalRunTime.between(996, 1003)) {
            runScore = 69;
          } else if (totalRunTime.between(1002, 1009)) {
            runScore = 68;
          } else if (totalRunTime.between(1008, 1015)) {
            runScore = 67;
          } else if (totalRunTime.between(1014, 1021)) {
            runScore = 66;
          } else if (totalRunTime.between(1020, 1027)) {
            runScore = 65;
          } else if (totalRunTime.between(1026, 1033)) {
            runScore = 65;
          } else if (totalRunTime.between(1032, 1039)) {
            runScore = 64;
          } else if (totalRunTime.between(1038, 1045)) {
            runScore = 63;
          } else if (totalRunTime.between(1044, 1051)) {
            runScore = 62;
          } else if (totalRunTime.between(1050, 1057)) {
            runScore = 61;
          } else if (totalRunTime.between(1056, 1063)) {
            runScore = 60;
          } else if (totalRunTime.between(1062, 1069)) {
            runScore = 59;
          } else if (totalRunTime.between(1068, 1075)) {
            runScore = 58;
          } else if (totalRunTime.between(1074, 1081)) {
            runScore = 57;
          } else if (totalRunTime.between(1080, 1087)) {
            runScore = 56;
          } else if (totalRunTime.between(1086, 1093)) {
            runScore = 55;
          } else if (totalRunTime.between(1092, 1099)) {
            runScore = 55;
          } else if (totalRunTime.between(1098, 1105)) {
            runScore = 54;
          } else if (totalRunTime.between(1104, 1111)) {
            runScore = 53;
          } else if (totalRunTime.between(1110, 1117)) {
            runScore = 52;
          } else if (totalRunTime.between(1116, 1123)) {
            runScore = 51;
          } else if (totalRunTime.between(1122, 1129)) {
            runScore = 50;
          } else if (totalRunTime.between(1128, 1135)) {
            runScore = 49;
          } else if (totalRunTime.between(1134, 1141)) {
            runScore = 48;
          } else if (totalRunTime.between(1140, 1147)) {
            runScore = 47;
          } else if (totalRunTime.between(1146, 1153)) {
            runScore = 46;
          } else if (totalRunTime.between(1152, 1159)) {
            runScore = 45;
          } else if (totalRunTime.between(1158, 1165)) {
            runScore = 45;
          } else if (totalRunTime.between(1164, 1171)) {
            runScore = 44;
          } else if (totalRunTime.between(1170, 1177)) {
            runScore = 43;
          } else if (totalRunTime.between(1176, 1183)) {
            runScore = 42;
          } else if (totalRunTime.between(1182, 1189)) {
            runScore = 41;
          } else if (totalRunTime.between(1188, 1195)) {
            runScore = 40;
          } else if (totalRunTime.between(1194, 1201)) {
            runScore = 39;
          } else if (totalRunTime.between(1200, 1207)) {
            runScore = 38;
          } else if (totalRunTime.between(1206, 1213)) {
            runScore = 37;
          } else if (totalRunTime.between(1212, 1219)) {
            runScore = 36;
          } else if (totalRunTime.between(1218, 1225)) {
            runScore = 35;
          } else if (totalRunTime.between(1224, 1231)) {
            runScore = 35;
          } else if (totalRunTime.between(1230, 1237)) {
            runScore = 34;
          } else if (totalRunTime.between(1236, 1243)) {
            runScore = 33;
          } else if (totalRunTime.between(1242, 1249)) {
            runScore = 32;
          } else if (totalRunTime.between(1248, 1255)) {
            runScore = 31;
          } else if (totalRunTime.between(1254, 1261)) {
            runScore = 30;
          } else if (totalRunTime.between(1260, 1267)) {
            runScore = 29;
          } else if (totalRunTime.between(1266, 1273)) {
            runScore = 28;
          } else if (totalRunTime.between(1272, 1279)) {
            runScore = 27;
          } else if (totalRunTime.between(1278, 1285)) {
            runScore = 26;
          } else if (totalRunTime.between(1284, 1291)) {
            runScore = 25;
          } else if (totalRunTime.between(1290, 1297)) {
            runScore = 25;
          } else if (totalRunTime.between(1296, 1303)) {
            runScore = 24;
          } else if (totalRunTime.between(1302, 1309)) {
            runScore = 23;
          } else if (totalRunTime.between(1308, 1315)) {
            runScore = 22;
          } else if (totalRunTime.between(1314, 1321)) {
            runScore = 21;
          } else if (totalRunTime.between(1320, 1327)) {
            runScore = 20;
          } else if (totalRunTime.between(1326, 1333)) {
            runScore = 19;
          } else if (totalRunTime.between(1332, 1339)) {
            runScore = 18;
          } else if (totalRunTime.between(1338, 1345)) {
            runScore = 17;
          } else if (totalRunTime.between(1344, 1351)) {
            runScore = 16;
          } else if (totalRunTime.between(1350, 1357)) {
            runScore = 15;
          } else if (totalRunTime.between(1356, 1363)) {
            runScore = 15;
          } else if (totalRunTime.between(1362, 1369)) {
            runScore = 14;
          } else if (totalRunTime.between(1368, 1375)) {
            runScore = 13;
          } else if (totalRunTime.between(1374, 1381)) {
            runScore = 12;
          } else if (totalRunTime.between(1380, 1387)) {
            runScore = 11;
          } else if (totalRunTime.between(1386, 1393)) {
            runScore = 10;
          } else if (totalRunTime.between(1392, 1399)) {
            runScore = 9;
          } else if (totalRunTime.between(1398, 1405)) {
            runScore = 8;
          } else if (totalRunTime.between(1404, 1411)) {
            runScore = 7;
          } else if (totalRunTime.between(1410, 1417)) {
            runScore = 6;
          } else if (totalRunTime.between(1416, 1423)) {
            runScore = 5;
          } else if (totalRunTime.between(1422, 1429)) {
            runScore = 5;
          } else if (totalRunTime.between(1428, 1435)) {
            runScore = 4;
          } else if (totalRunTime.between(1434, 1446)) {
            runScore = 3;
          } else if (totalRunTime.between(1445, 1451)) {
            runScore = 2;
          } else if (totalRunTime.between(1450, 1457)) {
            runScore = 1;
          } else if (totalRunTime > 1456) {
            runScore = 0;
          }
        } //close male 32 - 36 age range

        if (age >= 37 && age <= 41) {
          console.log('age range is between 37 and 41');
          //calculate pushup score male 37-41
          if (puCount >= 73) {
            puScore = 100;
          } else if (puCount == 72) {
            puScore = 99;
          } else if (puCount == 71) {
            puScore = 98;
          } else if (puCount == 70) {
            puScore = 97;
          } else if (puCount == 69) {
            puScore = 96;
          } else if (puCount == 68) {
            puScore = 95;
          } else if (puCount == 67) {
            puScore = 94;
          } else if (puCount == 66) {
            puScore = 93;
          } else if (puCount == 65) {
            puScore = 92;
          } else if (puCount == 64) {
            puScore = 91;
          } else if (puCount == 63) {
            puScore = 90;
          } else if (puCount == 62) {
            puScore = 89;
          } else if (puCount == 61) {
            puScore = 88;
          } else if (puCount == 60) {
            puScore = 87;
          } else if (puCount == 59) {
            puScore = 86;
          } else if (puCount == 58) {
            puScore = 85;
          } else if (puCount == 57) {
            puScore = 84;
          } else if (puCount == 56) {
            puScore = 83;
          } else if (puCount == 55) {
            puScore = 82;
          } else if (puCount == 54) {
            puScore = 81;
          } else if (puCount == 53) {
            puScore = 79;
          } else if (puCount == 52) {
            puScore = 78;
          } else if (puCount == 51) {
            puScore = 77;
          } else if (puCount == 50) {
            puScore = 76;
          } else if (puCount == 49) {
            puScore = 75;
          } else if (puCount == 48) {
            puScore = 74;
          } else if (puCount == 47) {
            puScore = 73;
          } else if (puCount == 46) {
            puScore = 72;
          } else if (puCount == 45) {
            puScore = 71;
          } else if (puCount == 44) {
            puScore = 70;
          } else if (puCount == 43) {
            puScore = 69;
          } else if (puCount == 42) {
            puScore = 68;
          } else if (puCount == 41) {
            puScore = 67;
          } else if (puCount == 40) {
            puScore = 66;
          } else if (puCount == 39) {
            puScore = 65;
          } else if (puCount == 38) {
            puScore = 64;
          } else if (puCount == 37) {
            puScore = 63;
          } else if (puCount == 36) {
            puScore = 62;
          } else if (puCount == 35) {
            puScore = 61;
          } else if (puCount == 34) {
            puScore = 60;
          } else if (puCount == 33) {
            puScore = 59;
          } else if (puCount == 32) {
            puScore = 58;
          } else if (puCount == 31) {
            puScore = 57;
          } else if (puCount == 30) {
            puScore = 56;
          } else if (puCount == 29) {
            puScore = 55;
          } else if (puCount == 28) {
            puScore = 54;
          } else if (puCount == 27) {
            puScore = 53;
          } else if (puCount == 26) {
            puScore = 52;
          } else if (puCount == 25) {
            puScore = 51;
          } else if (puCount == 24) {
            puScore = 50;
          } else if (puCount == 23) {
            puScore = 49;
          } else if (puCount == 22) {
            puScore = 48;
          } else if (puCount == 21) {
            puScore = 47;
          } else if (puCount == 20) {
            puScore = 46;
          } else if (puCount == 19) {
            puScore = 45;
          } else if (puCount == 18) {
            puScore = 44;
          } else if (puCount == 17) {
            puScore = 43;
          } else if (puCount == 16) {
            puScore = 42;
          } else if (puCount == 15) {
            puScore = 41;
          } else if (puCount == 14) {
            puScore = 39;
          } else if (puCount == 13) {
            puScore = 38;
          } else if (puCount == 12) {
            puScore = 37;
          } else if (puCount == 11) {
            puScore = 36;
          } else if (puCount == 10) {
            puScore = 35;
          } else if (puCount == 9) {
            puScore = 34;
          } else if (puCount == 8) {
            puScore = 33;
          } else if (puCount == 7) {
            puScore = 32;
          } else if (puCount == 6) {
            puScore = 31;
          } else if (puCount == 5) {
            puScore = 30;
          } else if (puCount == 4) {
            puScore = 29;
          } else if (puCount == 3) {
            puScore = 28;
          } else if (puCount == 2) {
            puScore = 27;
          } else if (puCount == 1) {
            puScore = 26;
          } else if (puCount == 0) {
            puScore = 0;
          }
          //calculate situp score male 37-41
          if (suCount >= 76) {
            suScore = 100;
          } else if (suCount == 75) {
            suScore = 99;
          } else if (suCount == 74) {
            suScore = 98;
          } else if (suCount == 73) {
            suScore = 97;
          } else if (suCount == 72) {
            suScore = 96;
          } else if (suCount == 71) {
            suScore = 95;
          } else if (suCount == 70) {
            suScore = 94;
          } else if (suCount == 69) {
            suScore = 93;
          } else if (suCount == 68) {
            suScore = 92;
          } else if (suCount == 67) {
            suScore = 91;
          } else if (suCount == 66) {
            suScore = 89;
          } else if (suCount == 65) {
            suScore = 88;
          } else if (suCount == 64) {
            suScore = 87;
          } else if (suCount == 63) {
            suScore = 86;
          } else if (suCount == 62) {
            suScore = 85;
          } else if (suCount == 61) {
            suScore = 84;
          } else if (suCount == 60) {
            suScore = 83;
          } else if (suCount == 59) {
            suScore = 82;
          } else if (suCount == 58) {
            suScore = 81;
          } else if (suCount == 57) {
            suScore = 80;
          } else if (suCount == 56) {
            suScore = 79;
          } else if (suCount == 55) {
            suScore = 78;
          } else if (suCount == 54) {
            suScore = 77;
          } else if (suCount == 53) {
            suScore = 76;
          } else if (suCount == 52) {
            suScore = 75;
          } else if (suCount == 51) {
            suScore = 74;
          } else if (suCount == 50) {
            suScore = 73;
          } else if (suCount == 49) {
            suScore = 72;
          } else if (suCount == 48) {
            suScore = 71;
          } else if (suCount == 47) {
            suScore = 69;
          } else if (suCount == 46) {
            suScore = 68;
          } else if (suCount == 45) {
            suScore = 67;
          } else if (suCount == 44) {
            suScore = 66;
          } else if (suCount == 43) {
            suScore = 65;
          } else if (suCount == 42) {
            suScore = 64;
          } else if (suCount == 41) {
            suScore = 63;
          } else if (suCount == 40) {
            suScore = 62;
          } else if (suCount == 39) {
            suScore = 61;
          } else if (suCount == 38) {
            suScore = 60;
          } else if (suCount == 37) {
            suScore = 59;
          } else if (suCount == 36) {
            suScore = 58;
          } else if (suCount == 35) {
            suScore = 57;
          } else if (suCount == 34) {
            suScore = 56;
          } else if (suCount == 33) {
            suScore = 55;
          } else if (suCount == 32) {
            suScore = 54;
          } else if (suCount == 31) {
            suScore = 53;
          } else if (suCount == 30) {
            suScore = 52;
          } else if (suCount == 29) {
            suScore = 50;
          } else if (suCount == 28) {
            suScore = 49;
          } else if (suCount == 27) {
            suScore = 48;
          } else if (suCount == 26) {
            suScore = 47;
          } else if (suCount == 25) {
            suScore = 46;
          } else if (suCount == 24) {
            suScore = 45;
          } else if (suCount == 23) {
            suScore = 44;
          } else if (suCount == 22) {
            suScore = 43;
          } else if (suCount == 21) {
            suScore = 42;
          } else if (suCount < 21) {
            suScore = 0;
          }
          //This one has a lot of repeat scores, could be bad data I got from the chart, test extensively
          //Males 37-41 run time
          if (totalRunTime <= 816) {
            runScore = 100;
          } else if (totalRunTime.between(816, 823)) {
            runScore = 99;
          } else if (totalRunTime.between(822, 829)) {
            runScore = 98;
          } else if (totalRunTime.between(828, 835)) {
            runScore = 97;
          } else if (totalRunTime.between(834, 841)) {
            runScore = 97;
          } else if (totalRunTime.between(840, 847)) {
            runScore = 96;
          } else if (totalRunTime.between(846, 853)) {
            runScore = 95;
          } else if (totalRunTime.between(852, 859)) {
            runScore = 94;
          } else if (totalRunTime.between(858, 865)) {
            runScore = 93;
          } else if (totalRunTime.between(864, 871)) {
            runScore = 92;
          } else if (totalRunTime.between(870, 877)) {
            runScore = 91;
          } else if (totalRunTime.between(876, 883)) {
            runScore = 91;
          } else if (totalRunTime.between(882, 889)) {
            runScore = 90;
          } else if (totalRunTime.between(888, 895)) {
            runScore = 89;
          } else if (totalRunTime.between(894, 901)) {
            runScore = 88;
          } else if (totalRunTime.between(900, 907)) {
            runScore = 87;
          } else if (totalRunTime.between(906, 913)) {
            runScore = 86;
          } else if (totalRunTime.between(912, 919)) {
            runScore = 86;
          } else if (totalRunTime.between(918, 925)) {
            runScore = 85;
          } else if (totalRunTime.between(924, 931)) {
            runScore = 84;
          } else if (totalRunTime.between(930, 937)) {
            runScore = 83;
          } else if (totalRunTime.between(936, 943)) {
            runScore = 82;
          } else if (totalRunTime.between(942, 949)) {
            runScore = 81;
          } else if (totalRunTime.between(948, 955)) {
            runScore = 80;
          } else if (totalRunTime.between(954, 961)) {
            runScore = 80;
          } else if (totalRunTime.between(960, 967)) {
            runScore = 79;
          } else if (totalRunTime.between(966, 973)) {
            runScore = 78;
          } else if (totalRunTime.between(972, 979)) {
            runScore = 77;
          } else if (totalRunTime.between(978, 985)) {
            runScore = 76;
          } else if (totalRunTime.between(984, 991)) {
            runScore = 75;
          } else if (totalRunTime.between(990, 997)) {
            runScore = 74;
          } else if (totalRunTime.between(996, 1003)) {
            runScore = 74;
          } else if (totalRunTime.between(1002, 1009)) {
            runScore = 73;
          } else if (totalRunTime.between(1008, 1015)) {
            runScore = 72;
          } else if (totalRunTime.between(1014, 1021)) {
            runScore = 71;
          } else if (totalRunTime.between(1020, 1027)) {
            runScore = 70;
          } else if (totalRunTime.between(1026, 1033)) {
            runScore = 69;
          } else if (totalRunTime.between(1032, 1039)) {
            runScore = 69;
          } else if (totalRunTime.between(1038, 1045)) {
            runScore = 68;
          } else if (totalRunTime.between(1044, 1051)) {
            runScore = 67;
          } else if (totalRunTime.between(1050, 1057)) {
            runScore = 66;
          } else if (totalRunTime.between(1056, 1063)) {
            runScore = 65;
          } else if (totalRunTime.between(1062, 1069)) {
            runScore = 64;
          } else if (totalRunTime.between(1068, 1075)) {
            runScore = 63;
          } else if (totalRunTime.between(1074, 1081)) {
            runScore = 63;
          } else if (totalRunTime.between(1080, 1087)) {
            runScore = 62;
          } else if (totalRunTime.between(1086, 1093)) {
            runScore = 61;
          } else if (totalRunTime.between(1092, 1099)) {
            runScore = 60;
          } else if (totalRunTime.between(1098, 1105)) {
            runScore = 59;
          } else if (totalRunTime.between(1104, 1111)) {
            runScore = 58;
          } else if (totalRunTime.between(1110, 1117)) {
            runScore = 57;
          } else if (totalRunTime.between(1116, 1123)) {
            runScore = 57;
          } else if (totalRunTime.between(1122, 1129)) {
            runScore = 56;
          } else if (totalRunTime.between(1128, 1135)) {
            runScore = 55;
          } else if (totalRunTime.between(1134, 1141)) {
            runScore = 54;
          } else if (totalRunTime.between(1140, 1147)) {
            runScore = 53;
          } else if (totalRunTime.between(1146, 1153)) {
            runScore = 52;
          } else if (totalRunTime.between(1152, 1159)) {
            runScore = 51;
          } else if (totalRunTime.between(1158, 1165)) {
            runScore = 51;
          } else if (totalRunTime.between(1164, 1171)) {
            runScore = 50;
          } else if (totalRunTime.between(1170, 1177)) {
            runScore = 49;
          } else if (totalRunTime.between(1176, 1183)) {
            runScore = 48;
          } else if (totalRunTime.between(1182, 1189)) {
            runScore = 47;
          } else if (totalRunTime.between(1188, 1195)) {
            runScore = 46;
          } else if (totalRunTime.between(1194, 1201)) {
            runScore = 46;
          } else if (totalRunTime.between(1200, 1207)) {
            runScore = 45;
          } else if (totalRunTime.between(1206, 1213)) {
            runScore = 44;
          } else if (totalRunTime.between(1212, 1219)) {
            runScore = 43;
          } else if (totalRunTime.between(1218, 1225)) {
            runScore = 42;
          } else if (totalRunTime.between(1224, 1231)) {
            runScore = 41;
          } else if (totalRunTime.between(1230, 1237)) {
            runScore = 40;
          } else if (totalRunTime.between(1236, 1243)) {
            runScore = 40;
          } else if (totalRunTime.between(1242, 1249)) {
            runScore = 39;
          } else if (totalRunTime.between(1248, 1255)) {
            runScore = 38;
          } else if (totalRunTime.between(1254, 1261)) {
            runScore = 37;
          } else if (totalRunTime.between(1260, 1267)) {
            runScore = 36;
          } else if (totalRunTime.between(1266, 1273)) {
            runScore = 35;
          } else if (totalRunTime.between(1272, 1279)) {
            runScore = 34;
          } else if (totalRunTime.between(1278, 1285)) {
            runScore = 34;
          } else if (totalRunTime.between(1284, 1291)) {
            runScore = 33;
          } else if (totalRunTime.between(1290, 1297)) {
            runScore = 32;
          } else if (totalRunTime.between(1296, 1303)) {
            runScore = 31;
          } else if (totalRunTime.between(1302, 1309)) {
            runScore = 30;
          } else if (totalRunTime.between(1308, 1315)) {
            runScore = 29;
          } else if (totalRunTime.between(1314, 1321)) {
            runScore = 29;
          } else if (totalRunTime.between(1320, 1327)) {
            runScore = 28;
          } else if (totalRunTime.between(1326, 1333)) {
            runScore = 27;
          } else if (totalRunTime.between(1332, 1339)) {
            runScore = 26;
          } else if (totalRunTime.between(1338, 1345)) {
            runScore = 25;
          } else if (totalRunTime.between(1344, 1351)) {
            runScore = 24;
          } else if (totalRunTime.between(1350, 1357)) {
            runScore = 23;
          } else if (totalRunTime.between(1356, 1363)) {
            runScore = 23;
          } else if (totalRunTime.between(1362, 1369)) {
            runScore = 22;
          } else if (totalRunTime.between(1368, 1375)) {
            runScore = 21;
          } else if (totalRunTime.between(1374, 1381)) {
            runScore = 20;
          } else if (totalRunTime.between(1380, 1387)) {
            runScore = 19;
          } else if (totalRunTime.between(1386, 1393)) {
            runScore = 18;
          } else if (totalRunTime.between(1392, 1399)) {
            runScore = 17;
          } else if (totalRunTime.between(1398, 1405)) {
            runScore = 17;
          } else if (totalRunTime.between(1404, 1411)) {
            runScore = 16;
          } else if (totalRunTime.between(1410, 1417)) {
            runScore = 15;
          } else if (totalRunTime.between(1416, 1423)) {
            runScore = 14;
          } else if (totalRunTime.between(1422, 1429)) {
            runScore = 13;
          } else if (totalRunTime.between(1428, 1435)) {
            runScore = 12;
          } else if (totalRunTime.between(1434, 1441)) {
            runScore = 11;
          } else if (totalRunTime.between(1440, 1447)) {
            runScore = 11;
          } else if (totalRunTime.between(1446, 1453)) {
            runScore = 10;
          } else if (totalRunTime.between(1452, 1459)) {
            runScore = 9;
          } else if (totalRunTime.between(1458, 1465)) {
            runScore = 8;
          } else if (totalRunTime.between(1464, 1471)) {
            runScore = 7;
          } else if (totalRunTime.between(1470, 1477)) {
            runScore = 6;
          } else if (totalRunTime.between(1476, 1483)) {
            runScore = 6;
          } else if (totalRunTime.between(1482, 1489)) {
            runScore = 5;
          } else if (totalRunTime.between(1488, 1495)) {
            runScore = 4;
          } else if (totalRunTime.between(1494, 1501)) {
            runScore = 3;
          } else if (totalRunTime.between(1500, 1507)) {
            runScore = 2;
          } else if (totalRunTime.between(1506, 1513)) {
            runScore = 1;
          } else if (totalRunTime > 1512) {
            runScore = 0;
          }
        } //close male 37 - 41 age range

        if (age >= 42 && age <= 46) {
          console.log('age range is between 42 and 46');
          //calculate pushup score male 42-46
          if (puCount >= 66) {
            puScore = 100;
          } else if (puCount == 65) {
            puScore = 99;
          } else if (puCount == 64) {
            puScore = 98;
          } else if (puCount == 63) {
            puScore = 97;
          } else if (puCount == 62) {
            puScore = 96;
          } else if (puCount == 61) {
            puScore = 94;
          } else if (puCount == 60) {
            puScore = 93;
          } else if (puCount == 59) {
            puScore = 92;
          } else if (puCount == 58) {
            puScore = 91;
          } else if (puCount == 57) {
            puScore = 90;
          } else if (puCount == 56) {
            puScore = 89;
          } else if (puCount == 55) {
            puScore = 88;
          } else if (puCount == 54) {
            puScore = 87;
          } else if (puCount == 53) {
            puScore = 86;
          } else if (puCount == 52) {
            puScore = 84;
          } else if (puCount == 51) {
            puScore = 83;
          } else if (puCount == 50) {
            puScore = 82;
          } else if (puCount == 49) {
            puScore = 81;
          } else if (puCount == 48) {
            puScore = 80;
          } else if (puCount == 47) {
            puScore = 79;
          } else if (puCount == 46) {
            puScore = 78;
          } else if (puCount == 45) {
            puScore = 77;
          } else if (puCount == 44) {
            puScore = 76;
          } else if (puCount == 43) {
            puScore = 74;
          } else if (puCount == 42) {
            puScore = 73;
          } else if (puCount == 41) {
            puScore = 72;
          } else if (puCount == 40) {
            puScore = 71;
          } else if (puCount == 39) {
            puScore = 70;
          } else if (puCount == 38) {
            puScore = 69;
          } else if (puCount == 37) {
            puScore = 68;
          } else if (puCount == 36) {
            puScore = 67;
          } else if (puCount == 35) {
            puScore = 66;
          } else if (puCount == 34) {
            puScore = 64;
          } else if (puCount == 33) {
            puScore = 63;
          } else if (puCount == 32) {
            puScore = 62;
          } else if (puCount == 31) {
            puScore = 61;
          } else if (puCount == 30) {
            puScore = 60;
          } else if (puCount == 29) {
            puScore = 59;
          } else if (puCount == 28) {
            puScore = 58;
          } else if (puCount == 27) {
            puScore = 57;
          } else if (puCount == 26) {
            puScore = 56;
          } else if (puCount == 25) {
            puScore = 54;
          } else if (puCount == 24) {
            puScore = 53;
          } else if (puCount == 23) {
            puScore = 52;
          } else if (puCount == 22) {
            puScore = 51;
          } else if (puCount == 21) {
            puScore = 50;
          } else if (puCount == 20) {
            puScore = 49;
          } else if (puCount == 19) {
            puScore = 48;
          } else if (puCount == 18) {
            puScore = 47;
          } else if (puCount == 17) {
            puScore = 46;
          } else if (puCount == 16) {
            puScore = 44;
          } else if (puCount == 15) {
            puScore = 43;
          } else if (puCount == 14) {
            puScore = 42;
          } else if (puCount == 13) {
            puScore = 41;
          } else if (puCount == 12) {
            puScore = 40;
          } else if (puCount == 11) {
            puScore = 39;
          } else if (puCount == 10) {
            puScore = 38;
          } else if (puCount == 9) {
            puScore = 37;
          } else if (puCount == 8) {
            puScore = 36;
          } else if (puCount == 7) {
            puScore = 34;
          } else if (puCount == 6) {
            puScore = 33;
          } else if (puCount == 5) {
            puScore = 32;
          } else if (puCount < 5) {
            puScore = 0;
          }
          //calculate situp score male 42-46
          if (suCount >= 72) {
            suScore = 100;
          } else if (suCount == 71) {
            suScore = 99;
          } else if (suCount == 70) {
            suScore = 98;
          } else if (suCount == 69) {
            suScore = 97;
          } else if (suCount == 68) {
            suScore = 96;
          } else if (suCount == 67) {
            suScore = 95;
          } else if (suCount == 66) {
            suScore = 94;
          } else if (suCount == 65) {
            suScore = 93;
          } else if (suCount == 64) {
            suScore = 92;
          } else if (suCount == 63) {
            suScore = 91;
          } else if (suCount == 62) {
            suScore = 90;
          } else if (suCount == 61) {
            suScore = 89;
          } else if (suCount == 60) {
            suScore = 88;
          } else if (suCount == 59) {
            suScore = 87;
          } else if (suCount == 58) {
            suScore = 86;
          } else if (suCount == 57) {
            suScore = 85;
          } else if (suCount == 56) {
            suScore = 84;
          } else if (suCount == 55) {
            suScore = 83;
          } else if (suCount == 54) {
            suScore = 82;
          } else if (suCount == 53) {
            suScore = 81;
          } else if (suCount == 52) {
            suScore = 80;
          } else if (suCount == 51) {
            suScore = 79;
          } else if (suCount == 50) {
            suScore = 78;
          } else if (suCount == 49) {
            suScore = 77;
          } else if (suCount == 48) {
            suScore = 76;
          } else if (suCount == 47) {
            suScore = 75;
          } else if (suCount == 46) {
            suScore = 74;
          } else if (suCount == 45) {
            suScore = 73;
          } else if (suCount == 44) {
            suScore = 72;
          } else if (suCount == 43) {
            suScore = 71;
          } else if (suCount == 42) {
            suScore = 70;
          } else if (suCount == 41) {
            suScore = 69;
          } else if (suCount == 40) {
            suScore = 68;
          } else if (suCount == 39) {
            suScore = 67;
          } else if (suCount == 38) {
            suScore = 66;
          } else if (suCount == 37) {
            suScore = 65;
          } else if (suCount == 36) {
            suScore = 64;
          } else if (suCount == 35) {
            suScore = 63;
          } else if (suCount == 34) {
            suScore = 62;
          } else if (suCount == 33) {
            suScore = 61;
          } else if (suCount == 32) {
            suScore = 60;
          } else if (suCount == 31) {
            suScore = 59;
          } else if (suCount == 30) {
            suScore = 58;
          } else if (suCount == 29) {
            suScore = 57;
          } else if (suCount == 28) {
            suScore = 56;
          } else if (suCount == 27) {
            suScore = 55;
          } else if (suCount == 26) {
            suScore = 54;
          } else if (suCount == 25) {
            suScore = 53;
          } else if (suCount == 24) {
            suScore = 52;
          } else if (suCount == 23) {
            suScore = 51;
          } else if (suCount == 22) {
            suScore = 50;
          } else if (suCount == 21) {
            suScore = 49;
          } else if (suCount < 21) {
            suScore = 0;
          }
          //calculate run score male 42-46
          if (totalRunTime <= 846) {
            runScore = 100;
          } else if (totalRunTime.between(846, 853)) {
            runScore = 99;
          } else if (totalRunTime.between(852, 859)) {
            runScore = 98;
          } else if (totalRunTime.between(858, 865)) {
            runScore = 97;
          } else if (totalRunTime.between(864, 871)) {
            runScore = 97;
          } else if (totalRunTime.between(870, 877)) {
            runScore = 96;
          } else if (totalRunTime.between(876, 883)) {
            runScore = 95;
          } else if (totalRunTime.between(882, 889)) {
            runScore = 94;
          } else if (totalRunTime.between(888, 895)) {
            runScore = 93;
          } else if (totalRunTime.between(894, 901)) {
            runScore = 92;
          } else if (totalRunTime.between(900, 907)) {
            runScore = 91;
          } else if (totalRunTime.between(906, 913)) {
            runScore = 90;
          } else if (totalRunTime.between(912, 919)) {
            runScore = 90;
          } else if (totalRunTime.between(918, 925)) {
            runScore = 89;
          } else if (totalRunTime.between(924, 931)) {
            runScore = 88;
          } else if (totalRunTime.between(930, 937)) {
            runScore = 87;
          } else if (totalRunTime.between(936, 943)) {
            runScore = 86;
          } else if (totalRunTime.between(942, 949)) {
            runScore = 85;
          } else if (totalRunTime.between(948, 955)) {
            runScore = 84;
          } else if (totalRunTime.between(954, 961)) {
            runScore = 83;
          } else if (totalRunTime.between(960, 967)) {
            runScore = 83;
          } else if (totalRunTime.between(966, 973)) {
            runScore = 82;
          } else if (totalRunTime.between(972, 979)) {
            runScore = 81;
          } else if (totalRunTime.between(978, 985)) {
            runScore = 80;
          } else if (totalRunTime.between(984, 991)) {
            runScore = 79;
          } else if (totalRunTime.between(990, 997)) {
            runScore = 78;
          } else if (totalRunTime.between(996, 1003)) {
            runScore = 77;
          } else if (totalRunTime.between(1002, 1009)) {
            runScore = 77;
          } else if (totalRunTime.between(1008, 1015)) {
            runScore = 76;
          } else if (totalRunTime.between(1014, 1021)) {
            runScore = 75;
          } else if (totalRunTime.between(1020, 1027)) {
            runScore = 74;
          } else if (totalRunTime.between(1026, 1033)) {
            runScore = 73;
          } else if (totalRunTime.between(1032, 1039)) {
            runScore = 72;
          } else if (totalRunTime.between(1038, 1045)) {
            runScore = 71;
          } else if (totalRunTime.between(1044, 1051)) {
            runScore = 70;
          } else if (totalRunTime.between(1050, 1057)) {
            runScore = 70;
          } else if (totalRunTime.between(1056, 1063)) {
            runScore = 69;
          } else if (totalRunTime.between(1062, 1069)) {
            runScore = 68;
          } else if (totalRunTime.between(1068, 1075)) {
            runScore = 67;
          } else if (totalRunTime.between(1074, 1081)) {
            runScore = 66;
          } else if (totalRunTime.between(1080, 1087)) {
            runScore = 65;
          } else if (totalRunTime.between(1086, 1093)) {
            runScore = 64;
          } else if (totalRunTime.between(1092, 1099)) {
            runScore = 63;
          } else if (totalRunTime.between(1098, 1105)) {
            runScore = 63;
          } else if (totalRunTime.between(1104, 1111)) {
            runScore = 62;
          } else if (totalRunTime.between(1110, 1117)) {
            runScore = 61;
          } else if (totalRunTime.between(1116, 1123)) {
            runScore = 60;
          } else if (totalRunTime.between(1122, 1129)) {
            runScore = 59;
          } else if (totalRunTime.between(1128, 1135)) {
            runScore = 58;
          } else if (totalRunTime.between(1134, 1141)) {
            runScore = 57;
          } else if (totalRunTime.between(1140, 1147)) {
            runScore = 57;
          } else if (totalRunTime.between(1146, 1153)) {
            runScore = 56;
          } else if (totalRunTime.between(1152, 1159)) {
            runScore = 55;
          } else if (totalRunTime.between(1158, 1165)) {
            runScore = 54;
          } else if (totalRunTime.between(1164, 1171)) {
            runScore = 53;
          } else if (totalRunTime.between(1170, 1177)) {
            runScore = 52;
          } else if (totalRunTime.between(1176, 1183)) {
            runScore = 51;
          } else if (totalRunTime.between(1182, 1189)) {
            runScore = 50;
          } else if (totalRunTime.between(1188, 1195)) {
            runScore = 50;
          } else if (totalRunTime.between(1194, 1201)) {
            runScore = 49;
          } else if (totalRunTime.between(1200, 1207)) {
            runScore = 48;
          } else if (totalRunTime.between(1206, 1213)) {
            runScore = 47;
          } else if (totalRunTime.between(1212, 1219)) {
            runScore = 46;
          } else if (totalRunTime.between(1218, 1225)) {
            runScore = 45;
          } else if (totalRunTime.between(1224, 1231)) {
            runScore = 44;
          } else if (totalRunTime.between(1230, 1237)) {
            runScore = 43;
          } else if (totalRunTime.between(1236, 1243)) {
            runScore = 43;
          } else if (totalRunTime.between(1242, 1249)) {
            runScore = 42;
          } else if (totalRunTime.between(1248, 1255)) {
            runScore = 41;
          } else if (totalRunTime.between(1254, 1261)) {
            runScore = 40;
          } else if (totalRunTime.between(1260, 1267)) {
            runScore = 39;
          } else if (totalRunTime.between(1266, 1273)) {
            runScore = 38;
          } else if (totalRunTime.between(1272, 1279)) {
            runScore = 37;
          } else if (totalRunTime.between(1278, 1285)) {
            runScore = 37;
          } else if (totalRunTime.between(1284, 1291)) {
            runScore = 36;
          } else if (totalRunTime.between(1290, 1297)) {
            runScore = 35;
          } else if (totalRunTime.between(1296, 1303)) {
            runScore = 34;
          } else if (totalRunTime.between(1302, 1309)) {
            runScore = 33;
          } else if (totalRunTime.between(1308, 1315)) {
            runScore = 32;
          } else if (totalRunTime.between(1314, 1321)) {
            runScore = 31;
          } else if (totalRunTime.between(1320, 1327)) {
            runScore = 30;
          } else if (totalRunTime.between(1326, 1333)) {
            runScore = 30;
          } else if (totalRunTime.between(1332, 1339)) {
            runScore = 29;
          } else if (totalRunTime.between(1338, 1345)) {
            runScore = 28;
          } else if (totalRunTime.between(1344, 1351)) {
            runScore = 27;
          } else if (totalRunTime.between(1350, 1357)) {
            runScore = 26;
          } else if (totalRunTime.between(1356, 1363)) {
            runScore = 25;
          } else if (totalRunTime.between(1362, 1369)) {
            runScore = 24;
          } else if (totalRunTime.between(1368, 1375)) {
            runScore = 23;
          } else if (totalRunTime.between(1374, 1381)) {
            runScore = 23;
          } else if (totalRunTime.between(1380, 1387)) {
            runScore = 22;
          } else if (totalRunTime.between(1386, 1393)) {
            runScore = 21;
          } else if (totalRunTime.between(1392, 1399)) {
            runScore = 20;
          } else if (totalRunTime.between(1398, 1405)) {
            runScore = 19;
          } else if (totalRunTime.between(1404, 1411)) {
            runScore = 18;
          } else if (totalRunTime.between(1410, 1417)) {
            runScore = 17;
          } else if (totalRunTime.between(1416, 1423)) {
            runScore = 17;
          } else if (totalRunTime.between(1422, 1429)) {
            runScore = 16;
          } else if (totalRunTime.between(1428, 1435)) {
            runScore = 15;
          } else if (totalRunTime.between(1434, 1441)) {
            runScore = 14;
          } else if (totalRunTime.between(1440, 1447)) {
            runScore = 13;
          } else if (totalRunTime.between(1446, 1453)) {
            runScore = 12;
          } else if (totalRunTime.between(1452, 1459)) {
            runScore = 11;
          } else if (totalRunTime.between(1458, 1465)) {
            runScore = 10;
          } else if (totalRunTime.between(1464, 1471)) {
            runScore = 10;
          } else if (totalRunTime.between(1470, 1477)) {
            runScore = 9;
          } else if (totalRunTime.between(1476, 1483)) {
            runScore = 8;
          } else if (totalRunTime.between(1482, 1489)) {
            runScore = 7;
          } else if (totalRunTime.between(1488, 1495)) {
            runScore = 6;
          } else if (totalRunTime.between(1494, 1501)) {
            runScore = 5;
          } else if (totalRunTime.between(1500, 1507)) {
            runScore = 4;
          } else if (totalRunTime.between(1506, 1513)) {
            runScore = 3;
          } else if (totalRunTime.between(1512, 1519)) {
            runScore = 3;
          } else if (totalRunTime.between(1518, 1525)) {
            runScore = 2;
          } else if (totalRunTime.between(1524, 1531)) {
            runScore = 1;
          } else if (totalRunTime > 1530) {
            runScore = 0;
          }
        } //close male 42 - 46 age range

        if (age >= 47 && age <= 51) {
          console.log('age range is between 47 and 51');
          //calculate pushup score male 47-51
          if (puCount >= 59) {
            puScore = 100;
          } else if (puCount == 58) {
            puScore = 99;
          } else if (puCount == 57) {
            puScore = 98;
          } else if (puCount == 56) {
            puScore = 96;
          } else if (puCount == 55) {
            puScore = 95;
          } else if (puCount == 54) {
            puScore = 94;
          } else if (puCount == 53) {
            puScore = 93;
          } else if (puCount == 52) {
            puScore = 92;
          } else if (puCount == 51) {
            puScore = 91;
          } else if (puCount == 50) {
            puScore = 89;
          } else if (puCount == 49) {
            puScore = 88;
          } else if (puCount == 48) {
            puScore = 87;
          } else if (puCount == 47) {
            puScore = 86;
          } else if (puCount == 46) {
            puScore = 85;
          } else if (puCount == 45) {
            puScore = 84;
          } else if (puCount == 44) {
            puScore = 82;
          } else if (puCount == 43) {
            puScore = 81;
          } else if (puCount == 42) {
            puScore = 80;
          } else if (puCount == 41) {
            puScore = 79;
          } else if (puCount == 40) {
            puScore = 78;
          } else if (puCount == 39) {
            puScore = 76;
          } else if (puCount == 38) {
            puScore = 75;
          } else if (puCount == 37) {
            puScore = 74;
          } else if (puCount == 36) {
            puScore = 73;
          } else if (puCount == 35) {
            puScore = 72;
          } else if (puCount == 34) {
            puScore = 71;
          } else if (puCount == 33) {
            puScore = 69;
          } else if (puCount == 32) {
            puScore = 68;
          } else if (puCount == 31) {
            puScore = 67;
          } else if (puCount == 30) {
            puScore = 66;
          } else if (puCount == 29) {
            puScore = 65;
          } else if (puCount == 28) {
            puScore = 64;
          } else if (puCount == 27) {
            puScore = 62;
          } else if (puCount == 26) {
            puScore = 61;
          } else if (puCount == 25) {
            puScore = 60;
          } else if (puCount == 24) {
            puScore = 59;
          } else if (puCount == 23) {
            puScore = 58;
          } else if (puCount == 22) {
            puScore = 56;
          } else if (puCount == 21) {
            puScore = 55;
          } else if (puCount == 20) {
            puScore = 54;
          } else if (puCount == 19) {
            puScore = 53;
          } else if (puCount == 18) {
            puScore = 52;
          } else if (puCount == 17) {
            puScore = 51;
          } else if (puCount == 16) {
            puScore = 49;
          } else if (puCount == 15) {
            puScore = 48;
          } else if (puCount == 14) {
            puScore = 47;
          } else if (puCount == 13) {
            puScore = 46;
          } else if (puCount == 12) {
            puScore = 45;
          } else if (puCount == 11) {
            puScore = 44;
          } else if (puCount == 10) {
            puScore = 42;
          } else if (puCount == 9) {
            puScore = 41;
          } else if (puCount == 8) {
            puScore = 40;
          } else if (puCount == 7) {
            puScore = 39;
          } else if (puCount == 6) {
            puScore = 38;
          } else if (puCount == 5) {
            puScore = 36;
          } else if (puCount < 5) {
            puScore = 0;
          }
          //calculate situp score male 47-51
          if (suCount >= 66) {
            suScore = 100;
          } else if (suCount == 65) {
            suScore = 99;
          } else if (suCount == 64) {
            suScore = 98;
          } else if (suCount == 63) {
            suScore = 97;
          } else if (suCount == 62) {
            suScore = 96;
          } else if (suCount == 61) {
            suScore = 94;
          } else if (suCount == 60) {
            suScore = 93;
          } else if (suCount == 59) {
            suScore = 92;
          } else if (suCount == 58) {
            suScore = 91;
          } else if (suCount == 57) {
            suScore = 90;
          } else if (suCount == 56) {
            suScore = 89;
          } else if (suCount == 55) {
            suScore = 88;
          } else if (suCount == 54) {
            suScore = 87;
          } else if (suCount == 53) {
            suScore = 86;
          } else if (suCount == 52) {
            suScore = 84;
          } else if (suCount == 51) {
            suScore = 83;
          } else if (suCount == 50) {
            suScore = 82;
          } else if (suCount == 49) {
            suScore = 81;
          } else if (suCount == 48) {
            suScore = 80;
          } else if (suCount == 47) {
            suScore = 79;
          } else if (suCount == 46) {
            suScore = 78;
          } else if (suCount == 45) {
            suScore = 77;
          } else if (suCount == 44) {
            suScore = 76;
          } else if (suCount == 43) {
            suScore = 74;
          } else if (suCount == 42) {
            suScore = 73;
          } else if (suCount == 41) {
            suScore = 72;
          } else if (suCount == 40) {
            suScore = 71;
          } else if (suCount == 39) {
            suScore = 70;
          } else if (suCount == 38) {
            suScore = 69;
          } else if (suCount == 37) {
            suScore = 68;
          } else if (suCount == 36) {
            suScore = 67;
          } else if (suCount == 35) {
            suScore = 66;
          } else if (suCount == 34) {
            suScore = 64;
          } else if (suCount == 33) {
            suScore = 63;
          } else if (suCount == 32) {
            suScore = 62;
          } else if (suCount == 31) {
            suScore = 61;
          } else if (suCount == 30) {
            suScore = 60;
          } else if (suCount == 29) {
            suScore = 59;
          } else if (suCount == 28) {
            suScore = 58;
          } else if (suCount == 27) {
            suScore = 57;
          } else if (suCount == 26) {
            suScore = 56;
          } else if (suCount == 25) {
            suScore = 54;
          } else if (suCount == 24) {
            suScore = 53;
          } else if (suCount == 23) {
            suScore = 52;
          } else if (suCount == 22) {
            suScore = 51;
          } else if (suCount == 21) {
            suScore = 50;
          } else if (suCount < 21) {
            suScore = 0;
          }
          //calculate run score male 47-51
          if (totalRunTime <= 864) {
            runScore = 100;
          } else if (totalRunTime.between(864, 871)) {
            runScore = 99;
          } else if (totalRunTime.between(870, 877)) {
            runScore = 98;
          } else if (totalRunTime.between(876, 883)) {
            runScore = 98;
          } else if (totalRunTime.between(882, 889)) {
            runScore = 97;
          } else if (totalRunTime.between(888, 895)) {
            runScore = 96;
          } else if (totalRunTime.between(894, 901)) {
            runScore = 95;
          } else if (totalRunTime.between(900, 907)) {
            runScore = 95;
          } else if (totalRunTime.between(906, 913)) {
            runScore = 94;
          } else if (totalRunTime.between(912, 919)) {
            runScore = 93;
          } else if (totalRunTime.between(918, 925)) {
            runScore = 92;
          } else if (totalRunTime.between(924, 931)) {
            runScore = 91;
          } else if (totalRunTime.between(930, 937)) {
            runScore = 91;
          } else if (totalRunTime.between(936, 943)) {
            runScore = 90;
          } else if (totalRunTime.between(942, 949)) {
            runScore = 89;
          } else if (totalRunTime.between(948, 955)) {
            runScore = 88;
          } else if (totalRunTime.between(954, 961)) {
            runScore = 87;
          } else if (totalRunTime.between(960, 967)) {
            runScore = 87;
          } else if (totalRunTime.between(966, 973)) {
            runScore = 86;
          } else if (totalRunTime.between(972, 979)) {
            runScore = 85;
          } else if (totalRunTime.between(978, 985)) {
            runScore = 84;
          } else if (totalRunTime.between(984, 991)) {
            runScore = 84;
          } else if (totalRunTime.between(990, 997)) {
            runScore = 83;
          } else if (totalRunTime.between(996, 1003)) {
            runScore = 82;
          } else if (totalRunTime.between(1002, 1009)) {
            runScore = 81;
          } else if (totalRunTime.between(1008, 1015)) {
            runScore = 80;
          } else if (totalRunTime.between(1014, 1021)) {
            runScore = 80;
          } else if (totalRunTime.between(1020, 1027)) {
            runScore = 79;
          } else if (totalRunTime.between(1026, 1033)) {
            runScore = 78;
          } else if (totalRunTime.between(1032, 1039)) {
            runScore = 77;
          } else if (totalRunTime.between(1038, 1045)) {
            runScore = 76;
          } else if (totalRunTime.between(1044, 1051)) {
            runScore = 76;
          } else if (totalRunTime.between(1050, 1057)) {
            runScore = 75;
          } else if (totalRunTime.between(1056, 1063)) {
            runScore = 74;
          } else if (totalRunTime.between(1062, 1069)) {
            runScore = 73;
          } else if (totalRunTime.between(1068, 1075)) {
            runScore = 73;
          } else if (totalRunTime.between(1074, 1081)) {
            runScore = 72;
          } else if (totalRunTime.between(1080, 1087)) {
            runScore = 71;
          } else if (totalRunTime.between(1086, 1093)) {
            runScore = 70;
          } else if (totalRunTime.between(1092, 1099)) {
            runScore = 69;
          } else if (totalRunTime.between(1098, 1105)) {
            runScore = 69;
          } else if (totalRunTime.between(1104, 1111)) {
            runScore = 68;
          } else if (totalRunTime.between(1110, 1117)) {
            runScore = 67;
          } else if (totalRunTime.between(1116, 1123)) {
            runScore = 66;
          } else if (totalRunTime.between(1122, 1129)) {
            runScore = 65;
          } else if (totalRunTime.between(1128, 1135)) {
            runScore = 65;
          } else if (totalRunTime.between(1134, 1141)) {
            runScore = 64;
          } else if (totalRunTime.between(1140, 1147)) {
            runScore = 63;
          } else if (totalRunTime.between(1146, 1153)) {
            runScore = 62;
          } else if (totalRunTime.between(1152, 1159)) {
            runScore = 62;
          } else if (totalRunTime.between(1158, 1165)) {
            runScore = 61;
          } else if (totalRunTime.between(1164, 1171)) {
            runScore = 60;
          } else if (totalRunTime.between(1170, 1177)) {
            runScore = 59;
          } else if (totalRunTime.between(1176, 1183)) {
            runScore = 58;
          } else if (totalRunTime.between(1182, 1189)) {
            runScore = 58;
          } else if (totalRunTime.between(1188, 1195)) {
            runScore = 57;
          } else if (totalRunTime.between(1194, 1201)) {
            runScore = 56;
          } else if (totalRunTime.between(1200, 1207)) {
            runScore = 55;
          } else if (totalRunTime.between(1206, 1213)) {
            runScore = 55;
          } else if (totalRunTime.between(1212, 1219)) {
            runScore = 54;
          } else if (totalRunTime.between(1218, 1225)) {
            runScore = 53;
          } else if (totalRunTime.between(1224, 1231)) {
            runScore = 52;
          } else if (totalRunTime.between(1230, 1237)) {
            runScore = 51;
          } else if (totalRunTime.between(1236, 1243)) {
            runScore = 51;
          } else if (totalRunTime.between(1242, 1249)) {
            runScore = 50;
          } else if (totalRunTime.between(1248, 1255)) {
            runScore = 49;
          } else if (totalRunTime.between(1254, 1261)) {
            runScore = 48;
          } else if (totalRunTime.between(1260, 1267)) {
            runScore = 47;
          } else if (totalRunTime.between(1266, 1273)) {
            runScore = 47;
          } else if (totalRunTime.between(1272, 1279)) {
            runScore = 46;
          } else if (totalRunTime.between(1278, 1285)) {
            runScore = 45;
          } else if (totalRunTime.between(1284, 1291)) {
            runScore = 44;
          } else if (totalRunTime.between(1290, 1297)) {
            runScore = 44;
          } else if (totalRunTime.between(1296, 1303)) {
            runScore = 43;
          } else if (totalRunTime.between(1302, 1309)) {
            runScore = 42;
          } else if (totalRunTime.between(1308, 1315)) {
            runScore = 41;
          } else if (totalRunTime.between(1314, 1321)) {
            runScore = 40;
          } else if (totalRunTime.between(1320, 1327)) {
            runScore = 40;
          } else if (totalRunTime.between(1326, 1333)) {
            runScore = 39;
          } else if (totalRunTime.between(1332, 1339)) {
            runScore = 38;
          } else if (totalRunTime.between(1338, 1345)) {
            runScore = 37;
          } else if (totalRunTime.between(1344, 1351)) {
            runScore = 36;
          } else if (totalRunTime.between(1350, 1357)) {
            runScore = 36;
          } else if (totalRunTime.between(1356, 1363)) {
            runScore = 35;
          } else if (totalRunTime.between(1362, 1369)) {
            runScore = 34;
          } else if (totalRunTime.between(1368, 1375)) {
            runScore = 33;
          } else if (totalRunTime.between(1374, 1381)) {
            runScore = 33;
          } else if (totalRunTime.between(1380, 1387)) {
            runScore = 32;
          } else if (totalRunTime.between(1386, 1393)) {
            runScore = 31;
          } else if (totalRunTime.between(1392, 1399)) {
            runScore = 30;
          } else if (totalRunTime.between(1398, 1405)) {
            runScore = 29;
          } else if (totalRunTime.between(1404, 1411)) {
            runScore = 29;
          } else if (totalRunTime.between(1410, 1417)) {
            runScore = 28;
          } else if (totalRunTime.between(1416, 1423)) {
            runScore = 27;
          } else if (totalRunTime.between(1422, 1429)) {
            runScore = 26;
          } else if (totalRunTime.between(1428, 1435)) {
            runScore = 25;
          } else if (totalRunTime.between(1434, 1441)) {
            runScore = 25;
          } else if (totalRunTime.between(1440, 1447)) {
            runScore = 24;
          } else if (totalRunTime.between(1446, 1453)) {
            runScore = 23;
          } else if (totalRunTime.between(1452, 1459)) {
            runScore = 22;
          } else if (totalRunTime.between(1458, 1465)) {
            runScore = 22;
          } else if (totalRunTime.between(1464, 1471)) {
            runScore = 21;
          } else if (totalRunTime.between(1470, 1477)) {
            runScore = 20;
          } else if (totalRunTime.between(1476, 1483)) {
            runScore = 19;
          } else if (totalRunTime.between(1482, 1489)) {
            runScore = 18;
          } else if (totalRunTime.between(1488, 1495)) {
            runScore = 18;
          } else if (totalRunTime.between(1494, 1501)) {
            runScore = 17;
          } else if (totalRunTime.between(1500, 1507)) {
            runScore = 16;
          } else if (totalRunTime.between(1506, 1513)) {
            runScore = 15;
          } else if (totalRunTime.between(1512, 1519)) {
            runScore = 15;
          } else if (totalRunTime.between(1518, 1525)) {
            runScore = 14;
          } else if (totalRunTime.between(1524, 1531)) {
            runScore = 13;
          } else if (totalRunTime.between(1530, 1537)) {
            runScore = 12;
          } else if (totalRunTime.between(1536, 1543)) {
            runScore = 11;
          } else if (totalRunTime.between(1542, 1549)) {
            runScore = 11;
          } else if (totalRunTime.between(1548, 1555)) {
            runScore = 10;
          } else if (totalRunTime.between(1554, 1561)) {
            runScore = 9;
          } else if (totalRunTime.between(1560, 1567)) {
            runScore = 8;
          } else if (totalRunTime.between(1566, 1573)) {
            runScore = 7;
          } else if (totalRunTime.between(1572, 1579)) {
            runScore = 7;
          } else if (totalRunTime.between(1578, 1585)) {
            runScore = 6;
          } else if (totalRunTime.between(1584, 1591)) {
            runScore = 5;
          } else if (totalRunTime > 1590) {
            runScore = 0;
          }
        } //close male 47 - 51 age range

        if (age >= 52 && age <= 56) {
          console.log('age range is between 52 and 56');
          //calculate pushup score male 52-56
          if (puCount >= 56) {
            puScore = 100;
          } else if (puCount == 55) {
            puScore = 99;
          } else if (puCount == 54) {
            puScore = 98;
          } else if (puCount == 53) {
            puScore = 97;
          } else if (puCount == 52) {
            puScore = 96;
          } else if (puCount == 51) {
            puScore = 94;
          } else if (puCount == 50) {
            puScore = 93;
          } else if (puCount == 49) {
            puScore = 92;
          } else if (puCount == 48) {
            puScore = 91;
          } else if (puCount == 47) {
            puScore = 90;
          } else if (puCount == 46) {
            puScore = 89;
          } else if (puCount == 45) {
            puScore = 88;
          } else if (puCount == 44) {
            puScore = 87;
          } else if (puCount == 43) {
            puScore = 86;
          } else if (puCount == 42) {
            puScore = 84;
          } else if (puCount == 41) {
            puScore = 83;
          } else if (puCount == 40) {
            puScore = 82;
          } else if (puCount == 39) {
            puScore = 81;
          } else if (puCount == 38) {
            puScore = 80;
          } else if (puCount == 37) {
            puScore = 79;
          } else if (puCount == 36) {
            puScore = 78;
          } else if (puCount == 35) {
            puScore = 77;
          } else if (puCount == 34) {
            puScore = 76;
          } else if (puCount == 33) {
            puScore = 74;
          } else if (puCount == 32) {
            puScore = 73;
          } else if (puCount == 31) {
            puScore = 72;
          } else if (puCount == 30) {
            puScore = 71;
          } else if (puCount == 29) {
            puScore = 70;
          } else if (puCount == 28) {
            puScore = 69;
          } else if (puCount == 27) {
            puScore = 68;
          } else if (puCount == 26) {
            puScore = 67;
          } else if (puCount == 25) {
            puScore = 66;
          } else if (puCount == 24) {
            puScore = 64;
          } else if (puCount == 23) {
            puScore = 63;
          } else if (puCount == 22) {
            puScore = 62;
          } else if (puCount == 21) {
            puScore = 61;
          } else if (puCount == 20) {
            puScore = 60;
          } else if (puCount == 19) {
            puScore = 59;
          } else if (puCount == 18) {
            puScore = 58;
          } else if (puCount == 17) {
            puScore = 57;
          } else if (puCount == 16) {
            puScore = 56;
          } else if (puCount == 15) {
            puScore = 54;
          } else if (puCount == 14) {
            puScore = 53;
          } else if (puCount == 13) {
            puScore = 52;
          } else if (puCount == 12) {
            puScore = 51;
          } else if (puCount == 11) {
            puScore = 50;
          } else if (puCount == 10) {
            puScore = 49;
          } else if (puCount == 9) {
            puScore = 48;
          } else if (puCount == 8) {
            puScore = 47;
          } else if (puCount == 7) {
            puScore = 46;
          } else if (puCount == 6) {
            puScore = 44;
          } else if (puCount == 5) {
            puScore = 43;
          } else if (puCount < 5) {
            puScore = 0;
          }
          //calculate situp score male 52-56
          if (suCount >= 66) {
            suScore = 100;
          } else if (suCount == 65) {
            suScore = 99;
          } else if (suCount == 64) {
            suScore = 98;
          } else if (suCount == 63) {
            suScore = 97;
          } else if (suCount == 62) {
            suScore = 96;
          } else if (suCount == 61) {
            suScore = 95;
          } else if (suCount == 60) {
            suScore = 94;
          } else if (suCount == 59) {
            suScore = 93;
          } else if (suCount == 58) {
            suScore = 92;
          } else if (suCount == 57) {
            suScore = 91;
          } else if (suCount == 56) {
            suScore = 89;
          } else if (suCount == 55) {
            suScore = 88;
          } else if (suCount == 54) {
            suScore = 87;
          } else if (suCount == 53) {
            suScore = 86;
          } else if (suCount == 52) {
            suScore = 85;
          } else if (suCount == 51) {
            suScore = 84;
          } else if (suCount == 50) {
            suScore = 83;
          } else if (suCount == 49) {
            suScore = 82;
          } else if (suCount == 48) {
            suScore = 81;
          } else if (suCount == 47) {
            suScore = 80;
          } else if (suCount == 46) {
            suScore = 79;
          } else if (suCount == 45) {
            suScore = 78;
          } else if (suCount == 44) {
            suScore = 77;
          } else if (suCount == 43) {
            suScore = 76;
          } else if (suCount == 42) {
            suScore = 75;
          } else if (suCount == 41) {
            suScore = 74;
          } else if (suCount == 40) {
            suScore = 73;
          } else if (suCount == 39) {
            suScore = 72;
          } else if (suCount == 38) {
            suScore = 71;
          } else if (suCount == 37) {
            suScore = 69;
          } else if (suCount == 36) {
            suScore = 68;
          } else if (suCount == 35) {
            suScore = 67;
          } else if (suCount == 34) {
            suScore = 66;
          } else if (suCount == 33) {
            suScore = 65;
          } else if (suCount == 32) {
            suScore = 64;
          } else if (suCount == 31) {
            suScore = 63;
          } else if (suCount == 30) {
            suScore = 62;
          } else if (suCount == 29) {
            suScore = 61;
          } else if (suCount == 28) {
            suScore = 60;
          } else if (suCount == 27) {
            suScore = 59;
          } else if (suCount == 26) {
            suScore = 58;
          } else if (suCount == 25) {
            suScore = 57;
          } else if (suCount == 24) {
            suScore = 56;
          } else if (suCount == 23) {
            suScore = 55;
          } else if (suCount == 22) {
            suScore = 54;
          } else if (suCount == 21) {
            suScore = 53;
          } else if (suCount < 21) {
            suScore = 0;
          }
          //calculate run score male 52-56
          if (totalRunTime <= 882) {
            runScore = 100;
          } else if (totalRunTime.between(882, 889)) {
            runScore = 99;
          } else if (totalRunTime.between(888, 895)) {
            runScore = 98;
          } else if (totalRunTime.between(894, 901)) {
            runScore = 98;
          } else if (totalRunTime.between(900, 907)) {
            runScore = 97;
          } else if (totalRunTime.between(906, 913)) {
            runScore = 96;
          } else if (totalRunTime.between(912, 919)) {
            runScore = 95;
          } else if (totalRunTime.between(918, 925)) {
            runScore = 95;
          } else if (totalRunTime.between(924, 931)) {
            runScore = 94;
          } else if (totalRunTime.between(930, 937)) {
            runScore = 93;
          } else if (totalRunTime.between(936, 943)) {
            runScore = 92;
          } else if (totalRunTime.between(942, 949)) {
            runScore = 91;
          } else if (totalRunTime.between(948, 955)) {
            runScore = 91;
          } else if (totalRunTime.between(954, 961)) {
            runScore = 90;
          } else if (totalRunTime.between(960, 967)) {
            runScore = 89;
          } else if (totalRunTime.between(966, 973)) {
            runScore = 88;
          } else if (totalRunTime.between(972, 979)) {
            runScore = 87;
          } else if (totalRunTime.between(978, 985)) {
            runScore = 87;
          } else if (totalRunTime.between(984, 991)) {
            runScore = 86;
          } else if (totalRunTime.between(990, 997)) {
            runScore = 85;
          } else if (totalRunTime.between(996, 1003)) {
            runScore = 84;
          } else if (totalRunTime.between(1002, 1009)) {
            runScore = 84;
          } else if (totalRunTime.between(1008, 1015)) {
            runScore = 83;
          } else if (totalRunTime.between(1014, 1021)) {
            runScore = 82;
          } else if (totalRunTime.between(1020, 1027)) {
            runScore = 81;
          } else if (totalRunTime.between(1026, 1033)) {
            runScore = 80;
          } else if (totalRunTime.between(1032, 1039)) {
            runScore = 80;
          } else if (totalRunTime.between(1038, 1045)) {
            runScore = 79;
          } else if (totalRunTime.between(1044, 1051)) {
            runScore = 78;
          } else if (totalRunTime.between(1050, 1057)) {
            runScore = 77;
          } else if (totalRunTime.between(1056, 1063)) {
            runScore = 76;
          } else if (totalRunTime.between(1062, 1069)) {
            runScore = 76;
          } else if (totalRunTime.between(1068, 1075)) {
            runScore = 75;
          } else if (totalRunTime.between(1074, 1081)) {
            runScore = 74;
          } else if (totalRunTime.between(1080, 1087)) {
            runScore = 73;
          } else if (totalRunTime.between(1086, 1093)) {
            runScore = 73;
          } else if (totalRunTime.between(1092, 1099)) {
            runScore = 72;
          } else if (totalRunTime.between(1098, 1105)) {
            runScore = 71;
          } else if (totalRunTime.between(1104, 1111)) {
            runScore = 70;
          } else if (totalRunTime.between(1110, 1117)) {
            runScore = 69;
          } else if (totalRunTime.between(1116, 1123)) {
            runScore = 69;
          } else if (totalRunTime.between(1122, 1129)) {
            runScore = 68;
          } else if (totalRunTime.between(1128, 1135)) {
            runScore = 67;
          } else if (totalRunTime.between(1134, 1141)) {
            runScore = 66;
          } else if (totalRunTime.between(1140, 1147)) {
            runScore = 65;
          } else if (totalRunTime.between(1146, 1153)) {
            runScore = 65;
          } else if (totalRunTime.between(1152, 1159)) {
            runScore = 64;
          } else if (totalRunTime.between(1158, 1165)) {
            runScore = 63;
          } else if (totalRunTime.between(1164, 1171)) {
            runScore = 62;
          } else if (totalRunTime.between(1170, 1177)) {
            runScore = 62;
          } else if (totalRunTime.between(1176, 1183)) {
            runScore = 61;
          } else if (totalRunTime.between(1182, 1189)) {
            runScore = 60;
          } else if (totalRunTime.between(1188, 1195)) {
            runScore = 59;
          } else if (totalRunTime.between(1194, 1201)) {
            runScore = 58;
          } else if (totalRunTime.between(1200, 1207)) {
            runScore = 58;
          } else if (totalRunTime.between(1206, 1213)) {
            runScore = 57;
          } else if (totalRunTime.between(1212, 1219)) {
            runScore = 56;
          } else if (totalRunTime.between(1218, 1225)) {
            runScore = 55;
          } else if (totalRunTime.between(1224, 1231)) {
            runScore = 55;
          } else if (totalRunTime.between(1230, 1237)) {
            runScore = 54;
          } else if (totalRunTime.between(1236, 1243)) {
            runScore = 53;
          } else if (totalRunTime.between(1242, 1249)) {
            runScore = 52;
          } else if (totalRunTime.between(1248, 1255)) {
            runScore = 51;
          } else if (totalRunTime.between(1254, 1261)) {
            runScore = 51;
          } else if (totalRunTime.between(1260, 1267)) {
            runScore = 50;
          } else if (totalRunTime.between(1266, 1273)) {
            runScore = 49;
          } else if (totalRunTime.between(1272, 1279)) {
            runScore = 48;
          } else if (totalRunTime.between(1278, 1285)) {
            runScore = 47;
          } else if (totalRunTime.between(1284, 1291)) {
            runScore = 47;
          } else if (totalRunTime.between(1290, 1297)) {
            runScore = 46;
          } else if (totalRunTime.between(1296, 1303)) {
            runScore = 45;
          } else if (totalRunTime.between(1302, 1309)) {
            runScore = 44;
          } else if (totalRunTime.between(1308, 1315)) {
            runScore = 44;
          } else if (totalRunTime.between(1314, 1321)) {
            runScore = 43;
          } else if (totalRunTime.between(1320, 1327)) {
            runScore = 42;
          } else if (totalRunTime.between(1326, 1333)) {
            runScore = 41;
          } else if (totalRunTime.between(1332, 1339)) {
            runScore = 40;
          } else if (totalRunTime.between(1338, 1345)) {
            runScore = 40;
          } else if (totalRunTime.between(1344, 1351)) {
            runScore = 39;
          } else if (totalRunTime.between(1350, 1357)) {
            runScore = 38;
          } else if (totalRunTime.between(1356, 1363)) {
            runScore = 37;
          } else if (totalRunTime.between(1362, 1369)) {
            runScore = 36;
          } else if (totalRunTime.between(1368, 1375)) {
            runScore = 36;
          } else if (totalRunTime.between(1374, 1381)) {
            runScore = 35;
          } else if (totalRunTime.between(1380, 1387)) {
            runScore = 34;
          } else if (totalRunTime.between(1386, 1393)) {
            runScore = 33;
          } else if (totalRunTime.between(1392, 1399)) {
            runScore = 33;
          } else if (totalRunTime.between(1398, 1405)) {
            runScore = 32;
          } else if (totalRunTime.between(1404, 1411)) {
            runScore = 31;
          } else if (totalRunTime.between(1410, 1417)) {
            runScore = 30;
          } else if (totalRunTime.between(1416, 1423)) {
            runScore = 29;
          } else if (totalRunTime.between(1422, 1429)) {
            runScore = 29;
          } else if (totalRunTime.between(1428, 1435)) {
            runScore = 28;
          } else if (totalRunTime.between(1434, 1441)) {
            runScore = 27;
          } else if (totalRunTime.between(1440, 1447)) {
            runScore = 26;
          } else if (totalRunTime.between(1446, 1453)) {
            runScore = 25;
          } else if (totalRunTime.between(1452, 1459)) {
            runScore = 25;
          } else if (totalRunTime.between(1458, 1465)) {
            runScore = 24;
          } else if (totalRunTime.between(1464, 1471)) {
            runScore = 23;
          } else if (totalRunTime.between(1470, 1477)) {
            runScore = 22;
          } else if (totalRunTime.between(1476, 1483)) {
            runScore = 22;
          } else if (totalRunTime.between(1482, 1489)) {
            runScore = 21;
          } else if (totalRunTime.between(1488, 1495)) {
            runScore = 20;
          } else if (totalRunTime.between(1494, 1501)) {
            runScore = 19;
          } else if (totalRunTime.between(1500, 1507)) {
            runScore = 18;
          } else if (totalRunTime.between(1506, 1513)) {
            runScore = 18;
          } else if (totalRunTime.between(1512, 1519)) {
            runScore = 17;
          } else if (totalRunTime.between(1518, 1525)) {
            runScore = 16;
          } else if (totalRunTime.between(1524, 1531)) {
            runScore = 15;
          } else if (totalRunTime.between(1530, 1537)) {
            runScore = 15;
          } else if (totalRunTime.between(1536, 1543)) {
            runScore = 14;
          } else if (totalRunTime.between(1542, 1549)) {
            runScore = 13;
          } else if (totalRunTime.between(1548, 1555)) {
            runScore = 12;
          } else if (totalRunTime.between(1554, 1561)) {
            runScore = 11;
          } else if (totalRunTime.between(1560, 1567)) {
            runScore = 11;
          } else if (totalRunTime.between(1566, 1573)) {
            runScore = 10;
          } else if (totalRunTime.between(1572, 1579)) {
            runScore = 9;
          } else if (totalRunTime.between(1578, 1585)) {
            runScore = 8;
          } else if (totalRunTime.between(1584, 1591)) {
            runScore = 7;
          } else if (totalRunTime > 1590) {
            runScore = 0;
          }
        } //close male 52 - 56 age range

        if (age >= 57 && age <= 61) {
          console.log('age range is between 57 and 61');
          //calculate pushup score male 57-61
          if (puCount >= 53) {
            puScore = 100;
          } else if (puCount == 52) {
            puScore = 99;
          } else if (puCount == 51) {
            puScore = 98;
          } else if (puCount == 50) {
            puScore = 97;
          } else if (puCount == 49) {
            puScore = 95;
          } else if (puCount == 48) {
            puScore = 94;
          } else if (puCount == 47) {
            puScore = 93;
          } else if (puCount == 46) {
            puScore = 92;
          } else if (puCount == 45) {
            puScore = 91;
          } else if (puCount == 44) {
            puScore = 90;
          } else if (puCount == 43) {
            puScore = 89;
          } else if (puCount == 42) {
            puScore = 87;
          } else if (puCount == 41) {
            puScore = 86;
          } else if (puCount == 40) {
            puScore = 85;
          } else if (puCount == 39) {
            puScore = 84;
          } else if (puCount == 38) {
            puScore = 83;
          } else if (puCount == 37) {
            puScore = 82;
          } else if (puCount == 36) {
            puScore = 81;
          } else if (puCount == 35) {
            puScore = 79;
          } else if (puCount == 34) {
            puScore = 78;
          } else if (puCount == 33) {
            puScore = 77;
          } else if (puCount == 32) {
            puScore = 76;
          } else if (puCount == 31) {
            puScore = 75;
          } else if (puCount == 30) {
            puScore = 74;
          } else if (puCount == 29) {
            puScore = 73;
          } else if (puCount == 28) {
            puScore = 71;
          } else if (puCount == 27) {
            puScore = 70;
          } else if (puCount == 26) {
            puScore = 69;
          } else if (puCount == 25) {
            puScore = 68;
          } else if (puCount == 24) {
            puScore = 67;
          } else if (puCount == 23) {
            puScore = 66;
          } else if (puCount == 22) {
            puScore = 65;
          } else if (puCount == 21) {
            puScore = 63;
          } else if (puCount == 20) {
            puScore = 62;
          } else if (puCount == 19) {
            puScore = 61;
          } else if (puCount == 18) {
            puScore = 60;
          } else if (puCount == 17) {
            puScore = 59;
          } else if (puCount == 16) {
            puScore = 58;
          } else if (puCount == 15) {
            puScore = 57;
          } else if (puCount == 14) {
            puScore = 55;
          } else if (puCount == 13) {
            puScore = 54;
          } else if (puCount == 12) {
            puScore = 53;
          } else if (puCount == 11) {
            puScore = 52;
          } else if (puCount == 10) {
            puScore = 51;
          } else if (puCount == 9) {
            puScore = 50;
          } else if (puCount == 8) {
            puScore = 49;
          } else if (puCount == 7) {
            puScore = 47;
          } else if (puCount == 6) {
            puScore = 46;
          } else if (puCount == 5) {
            puScore = 45;
          } else if (puCount < 5) {
            puScore = 0;
          }
          //calculate situp score male 57-61
          if (suCount >= 64) {
            suScore = 100;
          } else if (suCount == 63) {
            suScore = 99;
          } else if (suCount == 62) {
            suScore = 98;
          } else if (suCount == 61) {
            suScore = 97;
          } else if (suCount == 60) {
            suScore = 96;
          } else if (suCount == 59) {
            suScore = 95;
          } else if (suCount == 58) {
            suScore = 94;
          } else if (suCount == 57) {
            suScore = 92;
          } else if (suCount == 56) {
            suScore = 91;
          } else if (suCount == 55) {
            suScore = 90;
          } else if (suCount == 54) {
            suScore = 89;
          } else if (suCount == 53) {
            suScore = 88;
          } else if (suCount == 52) {
            suScore = 87;
          } else if (suCount == 51) {
            suScore = 86;
          } else if (suCount == 50) {
            suScore = 85;
          } else if (suCount == 49) {
            suScore = 84;
          } else if (suCount == 48) {
            suScore = 83;
          } else if (suCount == 47) {
            suScore = 82;
          } else if (suCount == 46) {
            suScore = 81;
          } else if (suCount == 45) {
            suScore = 79;
          } else if (suCount == 44) {
            suScore = 78;
          } else if (suCount == 43) {
            suScore = 77;
          } else if (suCount == 42) {
            suScore = 76;
          } else if (suCount == 41) {
            suScore = 75;
          } else if (suCount == 40) {
            suScore = 74;
          } else if (suCount == 39) {
            suScore = 73;
          } else if (suCount == 38) {
            suScore = 72;
          } else if (suCount == 37) {
            suScore = 71;
          } else if (suCount == 36) {
            suScore = 70;
          } else if (suCount == 35) {
            suScore = 69;
          } else if (suCount == 34) {
            suScore = 68;
          } else if (suCount == 33) {
            suScore = 66;
          } else if (suCount == 32) {
            suScore = 65;
          } else if (suCount == 31) {
            suScore = 64;
          } else if (suCount == 30) {
            suScore = 63;
          } else if (suCount == 29) {
            suScore = 62;
          } else if (suCount == 28) {
            suScore = 61;
          } else if (suCount == 27) {
            suScore = 60;
          } else if (suCount == 26) {
            suScore = 59;
          } else if (suCount == 25) {
            suScore = 58;
          } else if (suCount == 24) {
            suScore = 57;
          } else if (suCount == 23) {
            suScore = 56;
          } else if (suCount == 22) {
            suScore = 55;
          } else if (suCount == 21) {
            suScore = 54;
          } else if (suCount < 21) {
            suScore = 0;
          }
          //calculate run score male 57-61
          if (totalRunTime <= 918) {
            runScore = 100;
          } else if (totalRunTime.between(918, 925)) {
            runScore = 99;
          } else if (totalRunTime.between(924, 931)) {
            runScore = 98;
          } else if (totalRunTime.between(930, 937)) {
            runScore = 97;
          } else if (totalRunTime.between(936, 943)) {
            runScore = 97;
          } else if (totalRunTime.between(942, 949)) {
            runScore = 96;
          } else if (totalRunTime.between(948, 955)) {
            runScore = 95;
          } else if (totalRunTime.between(954, 961)) {
            runScore = 94;
          } else if (totalRunTime.between(960, 967)) {
            runScore = 93;
          } else if (totalRunTime.between(966, 973)) {
            runScore = 92;
          } else if (totalRunTime.between(972, 979)) {
            runScore = 91;
          } else if (totalRunTime.between(978, 985)) {
            runScore = 90;
          } else if (totalRunTime.between(984, 991)) {
            runScore = 90;
          } else if (totalRunTime.between(990, 997)) {
            runScore = 89;
          } else if (totalRunTime.between(996, 1003)) {
            runScore = 88;
          } else if (totalRunTime.between(1002, 1009)) {
            runScore = 87;
          } else if (totalRunTime.between(1008, 1015)) {
            runScore = 86;
          } else if (totalRunTime.between(1014, 1021)) {
            runScore = 85;
          } else if (totalRunTime.between(1020, 1027)) {
            runScore = 84;
          } else if (totalRunTime.between(1026, 1033)) {
            runScore = 83;
          } else if (totalRunTime.between(1032, 1039)) {
            runScore = 83;
          } else if (totalRunTime.between(1038, 1045)) {
            runScore = 82;
          } else if (totalRunTime.between(1044, 1051)) {
            runScore = 81;
          } else if (totalRunTime.between(1050, 1057)) {
            runScore = 80;
          } else if (totalRunTime.between(1056, 1063)) {
            runScore = 79;
          } else if (totalRunTime.between(1062, 1069)) {
            runScore = 78;
          } else if (totalRunTime.between(1068, 1075)) {
            runScore = 77;
          } else if (totalRunTime.between(1074, 1081)) {
            runScore = 77;
          } else if (totalRunTime.between(1080, 1087)) {
            runScore = 76;
          } else if (totalRunTime.between(1086, 1093)) {
            runScore = 75;
          } else if (totalRunTime.between(1092, 1099)) {
            runScore = 74;
          } else if (totalRunTime.between(1098, 1105)) {
            runScore = 73;
          } else if (totalRunTime.between(1104, 1111)) {
            runScore = 72;
          } else if (totalRunTime.between(1110, 1117)) {
            runScore = 71;
          } else if (totalRunTime.between(1116, 1123)) {
            runScore = 70;
          } else if (totalRunTime.between(1122, 1129)) {
            runScore = 70;
          } else if (totalRunTime.between(1128, 1135)) {
            runScore = 69;
          } else if (totalRunTime.between(1134, 1141)) {
            runScore = 68;
          } else if (totalRunTime.between(1140, 1147)) {
            runScore = 67;
          } else if (totalRunTime.between(1146, 1153)) {
            runScore = 66;
          } else if (totalRunTime.between(1152, 1159)) {
            runScore = 65;
          } else if (totalRunTime.between(1158, 1165)) {
            runScore = 64;
          } else if (totalRunTime.between(1164, 1171)) {
            runScore = 63;
          } else if (totalRunTime.between(1170, 1177)) {
            runScore = 63;
          } else if (totalRunTime.between(1176, 1183)) {
            runScore = 62;
          } else if (totalRunTime.between(1182, 1189)) {
            runScore = 61;
          } else if (totalRunTime.between(1188, 1195)) {
            runScore = 60;
          } else if (totalRunTime.between(1194, 1201)) {
            runScore = 59;
          } else if (totalRunTime.between(1200, 1207)) {
            runScore = 58;
          } else if (totalRunTime.between(1206, 1213)) {
            runScore = 57;
          } else if (totalRunTime.between(1212, 1219)) {
            runScore = 57;
          } else if (totalRunTime.between(1218, 1225)) {
            runScore = 56;
          } else if (totalRunTime.between(1224, 1231)) {
            runScore = 55;
          } else if (totalRunTime.between(1230, 1237)) {
            runScore = 54;
          } else if (totalRunTime.between(1236, 1243)) {
            runScore = 53;
          } else if (totalRunTime.between(1242, 1249)) {
            runScore = 52;
          } else if (totalRunTime.between(1248, 1255)) {
            runScore = 51;
          } else if (totalRunTime.between(1254, 1261)) {
            runScore = 50;
          } else if (totalRunTime.between(1260, 1267)) {
            runScore = 50;
          } else if (totalRunTime.between(1266, 1273)) {
            runScore = 49;
          } else if (totalRunTime.between(1272, 1279)) {
            runScore = 48;
          } else if (totalRunTime.between(1278, 1285)) {
            runScore = 47;
          } else if (totalRunTime.between(1284, 1291)) {
            runScore = 46;
          } else if (totalRunTime.between(1290, 1297)) {
            runScore = 45;
          } else if (totalRunTime.between(1296, 1303)) {
            runScore = 44;
          } else if (totalRunTime.between(1302, 1309)) {
            runScore = 43;
          } else if (totalRunTime.between(1308, 1315)) {
            runScore = 43;
          } else if (totalRunTime.between(1314, 1321)) {
            runScore = 42;
          } else if (totalRunTime.between(1320, 1327)) {
            runScore = 41;
          } else if (totalRunTime.between(1326, 1333)) {
            runScore = 40;
          } else if (totalRunTime.between(1332, 1339)) {
            runScore = 39;
          } else if (totalRunTime.between(1338, 1345)) {
            runScore = 38;
          } else if (totalRunTime.between(1344, 1351)) {
            runScore = 37;
          } else if (totalRunTime.between(1350, 1357)) {
            runScore = 37;
          } else if (totalRunTime.between(1356, 1363)) {
            runScore = 36;
          } else if (totalRunTime.between(1362, 1369)) {
            runScore = 35;
          } else if (totalRunTime.between(1368, 1375)) {
            runScore = 34;
          } else if (totalRunTime.between(1374, 1381)) {
            runScore = 33;
          } else if (totalRunTime.between(1380, 1387)) {
            runScore = 32;
          } else if (totalRunTime.between(1386, 1393)) {
            runScore = 31;
          } else if (totalRunTime.between(1392, 1399)) {
            runScore = 30;
          } else if (totalRunTime.between(1398, 1405)) {
            runScore = 30;
          } else if (totalRunTime.between(1404, 1411)) {
            runScore = 29;
          } else if (totalRunTime.between(1410, 1417)) {
            runScore = 28;
          } else if (totalRunTime.between(1416, 1423)) {
            runScore = 27;
          } else if (totalRunTime.between(1422, 1429)) {
            runScore = 26;
          } else if (totalRunTime.between(1428, 1435)) {
            runScore = 25;
          } else if (totalRunTime.between(1434, 1441)) {
            runScore = 24;
          } else if (totalRunTime.between(1440, 1447)) {
            runScore = 23;
          } else if (totalRunTime.between(1446, 1453)) {
            runScore = 23;
          } else if (totalRunTime.between(1452, 1459)) {
            runScore = 22;
          } else if (totalRunTime.between(1458, 1465)) {
            runScore = 21;
          } else if (totalRunTime.between(1464, 1471)) {
            runScore = 20;
          } else if (totalRunTime.between(1470, 1477)) {
            runScore = 19;
          } else if (totalRunTime.between(1476, 1483)) {
            runScore = 18;
          } else if (totalRunTime.between(1482, 1489)) {
            runScore = 17;
          } else if (totalRunTime.between(1488, 1495)) {
            runScore = 17;
          } else if (totalRunTime.between(1494, 1501)) {
            runScore = 16;
          } else if (totalRunTime.between(1500, 1507)) {
            runScore = 15;
          } else if (totalRunTime.between(1506, 1513)) {
            runScore = 14;
          } else if (totalRunTime.between(1512, 1519)) {
            runScore = 13;
          } else if (totalRunTime.between(1518, 1525)) {
            runScore = 12;
          } else if (totalRunTime.between(1524, 1531)) {
            runScore = 11;
          } else if (totalRunTime.between(1530, 1537)) {
            runScore = 10;
          } else if (totalRunTime.between(1536, 1543)) {
            runScore = 10;
          } else if (totalRunTime.between(1542, 1549)) {
            runScore = 9;
          } else if (totalRunTime.between(1548, 1555)) {
            runScore = 8;
          } else if (totalRunTime.between(1554, 1561)) {
            runScore = 7;
          } else if (totalRunTime.between(1560, 1567)) {
            runScore = 6;
          } else if (totalRunTime.between(1566, 1573)) {
            runScore = 5;
          } else if (totalRunTime.between(1572, 1579)) {
            runScore = 4;
          } else if (totalRunTime.between(1578, 1585)) {
            runScore = 3;
          } else if (totalRunTime.between(1584, 1591)) {
            runScore = 3;
          } else if (totalRunTime > 1590) {
            runScore = 0;
          }
        } //close male 57 - 61 age range

        if (age >= 62) {
          console.log('age range is 62 +');
          //calculate pushup score male 62+
          if (puCount >= 50) {
            puScore = 100;
          } else if (puCount == 49) {
            puScore = 99;
          } else if (puCount == 48) {
            puScore = 98;
          } else if (puCount == 47) {
            puScore = 96;
          } else if (puCount == 46) {
            puScore = 95;
          } else if (puCount == 45) {
            puScore = 94;
          } else if (puCount == 44) {
            puScore = 93;
          } else if (puCount == 43) {
            puScore = 92;
          } else if (puCount == 42) {
            puScore = 91;
          } else if (puCount == 41) {
            puScore = 89;
          } else if (puCount == 40) {
            puScore = 88;
          } else if (puCount == 39) {
            puScore = 87;
          } else if (puCount == 38) {
            puScore = 86;
          } else if (puCount == 37) {
            puScore = 85;
          } else if (puCount == 36) {
            puScore = 84;
          } else if (puCount == 35) {
            puScore = 82;
          } else if (puCount == 34) {
            puScore = 81;
          } else if (puCount == 33) {
            puScore = 80;
          } else if (puCount == 32) {
            puScore = 79;
          } else if (puCount == 31) {
            puScore = 78;
          } else if (puCount == 30) {
            puScore = 76;
          } else if (puCount == 29) {
            puScore = 75;
          } else if (puCount == 28) {
            puScore = 74;
          } else if (puCount == 27) {
            puScore = 73;
          } else if (puCount == 26) {
            puScore = 72;
          } else if (puCount == 25) {
            puScore = 71;
          } else if (puCount == 24) {
            puScore = 69;
          } else if (puCount == 23) {
            puScore = 68;
          } else if (puCount == 22) {
            puScore = 67;
          } else if (puCount == 21) {
            puScore = 66;
          } else if (puCount == 20) {
            puScore = 65;
          } else if (puCount == 19) {
            puScore = 64;
          } else if (puCount == 18) {
            puScore = 62;
          } else if (puCount == 17) {
            puScore = 61;
          } else if (puCount == 16) {
            puScore = 60;
          } else if (puCount == 15) {
            puScore = 59;
          } else if (puCount == 14) {
            puScore = 58;
          } else if (puCount == 13) {
            puScore = 56;
          } else if (puCount == 12) {
            puScore = 55;
          } else if (puCount == 11) {
            puScore = 54;
          } else if (puCount == 10) {
            puScore = 53;
          } else if (puCount == 9) {
            puScore = 52;
          } else if (puCount == 8) {
            puScore = 51;
          } else if (puCount == 7) {
            puScore = 49;
          } else if (puCount == 6) {
            puScore = 48;
          } else if (puCount == 5) {
            puScore = 47;
          } else if (puCount < 5) {
            puScore = 0;
          }
          //calculate situp score male 62+
          if (suCount >= 63) {
            suScore = 100;
          } else if (suCount == 62) {
            suScore = 99;
          } else if (suCount == 61) {
            suScore = 98;
          } else if (suCount == 60) {
            suScore = 97;
          } else if (suCount == 59) {
            suScore = 96;
          } else if (suCount == 58) {
            suScore = 95;
          } else if (suCount == 57) {
            suScore = 94;
          } else if (suCount == 56) {
            suScore = 92;
          } else if (suCount == 55) {
            suScore = 91;
          } else if (suCount == 54) {
            suScore = 90;
          } else if (suCount == 53) {
            suScore = 89;
          } else if (suCount == 52) {
            suScore = 88;
          } else if (suCount == 51) {
            suScore = 87;
          } else if (suCount == 50) {
            suScore = 86;
          } else if (suCount == 49) {
            suScore = 85;
          } else if (suCount == 48) {
            suScore = 84;
          } else if (suCount == 47) {
            suScore = 83;
          } else if (suCount == 46) {
            suScore = 82;
          } else if (suCount == 45) {
            suScore = 81;
          } else if (suCount == 44) {
            suScore = 79;
          } else if (suCount == 43) {
            suScore = 78;
          } else if (suCount == 42) {
            suScore = 77;
          } else if (suCount == 41) {
            suScore = 76;
          } else if (suCount == 40) {
            suScore = 75;
          } else if (suCount == 39) {
            suScore = 74;
          } else if (suCount == 38) {
            suScore = 73;
          } else if (suCount == 37) {
            suScore = 72;
          } else if (suCount == 36) {
            suScore = 71;
          } else if (suCount == 35) {
            suScore = 70;
          } else if (suCount == 34) {
            suScore = 69;
          } else if (suCount == 33) {
            suScore = 68;
          } else if (suCount == 32) {
            suScore = 66;
          } else if (suCount == 31) {
            suScore = 65;
          } else if (suCount == 30) {
            suScore = 64;
          } else if (suCount == 29) {
            suScore = 63;
          } else if (suCount == 28) {
            suScore = 62;
          } else if (suCount == 27) {
            suScore = 61;
          } else if (suCount == 26) {
            suScore = 60;
          } else if (suCount == 25) {
            suScore = 59;
          } else if (suCount == 24) {
            suScore = 58;
          } else if (suCount == 23) {
            suScore = 57;
          } else if (suCount == 22) {
            suScore = 56;
          } else if (suCount == 21) {
            suScore = 55;
          } else if (suCount < 21) {
            suSCore = 0;
          }
          //calculate run score male 62+
          if (totalRunTime <= 942) {
            runScore = 100;
          } else if (totalRunTime.between(942, 949)) {
            runScore = 99;
          } else if (totalRunTime.between(948, 955)) {
            runScore = 98;
          } else if (totalRunTime.between(954, 961)) {
            runScore = 97;
          } else if (totalRunTime.between(960, 967)) {
            runScore = 96;
          } else if (totalRunTime.between(966, 973)) {
            runScore = 95;
          } else if (totalRunTime.between(972, 979)) {
            runScore = 94;
          } else if (totalRunTime.between(978, 985)) {
            runScore = 93;
          } else if (totalRunTime.between(984, 991)) {
            runScore = 93;
          } else if (totalRunTime.between(990, 997)) {
            runScore = 92;
          } else if (totalRunTime.between(996, 1003)) {
            runScore = 91;
          } else if (totalRunTime.between(1002, 1009)) {
            runScore = 90;
          } else if (totalRunTime.between(1008, 1015)) {
            runScore = 89;
          } else if (totalRunTime.between(1014, 1021)) {
            runScore = 88;
          } else if (totalRunTime.between(1020, 1027)) {
            runScore = 87;
          } else if (totalRunTime.between(1026, 1033)) {
            runScore = 86;
          } else if (totalRunTime.between(1032, 1039)) {
            runScore = 85;
          } else if (totalRunTime.between(1038, 1045)) {
            runScore = 84;
          } else if (totalRunTime.between(1044, 1051)) {
            runScore = 83;
          } else if (totalRunTime.between(1050, 1057)) {
            runScore = 82;
          } else if (totalRunTime.between(1056, 1063)) {
            runScore = 81;
          } else if (totalRunTime.between(1062, 1069)) {
            runScore = 80;
          } else if (totalRunTime.between(1068, 1075)) {
            runScore = 80;
          } else if (totalRunTime.between(1074, 1081)) {
            runScore = 79;
          } else if (totalRunTime.between(1080, 1087)) {
            runScore = 78;
          } else if (totalRunTime.between(1086, 1093)) {
            runScore = 77;
          } else if (totalRunTime.between(1092, 1099)) {
            runScore = 76;
          } else if (totalRunTime.between(1098, 1105)) {
            runScore = 75;
          } else if (totalRunTime.between(1104, 1111)) {
            runScore = 74;
          } else if (totalRunTime.between(1110, 1117)) {
            runScore = 73;
          } else if (totalRunTime.between(1116, 1123)) {
            runScore = 72;
          } else if (totalRunTime.between(1122, 1129)) {
            runScore = 71;
          } else if (totalRunTime.between(1128, 1135)) {
            runScore = 70;
          } else if (totalRunTime.between(1134, 1141)) {
            runScore = 69;
          } else if (totalRunTime.between(1140, 1147)) {
            runScore = 68;
          } else if (totalRunTime.between(1146, 1153)) {
            runScore = 67;
          } else if (totalRunTime.between(1152, 1159)) {
            runScore = 67;
          } else if (totalRunTime.between(1158, 1165)) {
            runScore = 66;
          } else if (totalRunTime.between(1164, 1171)) {
            runScore = 65;
          } else if (totalRunTime.between(1170, 1177)) {
            runScore = 64;
          } else if (totalRunTime.between(1176, 1183)) {
            runScore = 63;
          } else if (totalRunTime.between(1182, 1189)) {
            runScore = 62;
          } else if (totalRunTime.between(1188, 1195)) {
            runScore = 61;
          } else if (totalRunTime.between(1194, 1201)) {
            runScore = 60;
          } else if (totalRunTime.between(1200, 1207)) {
            runScore = 59;
          } else if (totalRunTime.between(1206, 1213)) {
            runScore = 58;
          } else if (totalRunTime.between(1212, 1219)) {
            runScore = 57;
          } else if (totalRunTime.between(1218, 1225)) {
            runScore = 56;
          } else if (totalRunTime.between(1224, 1231)) {
            runScore = 55;
          } else if (totalRunTime.between(1230, 1237)) {
            runScore = 54;
          } else if (totalRunTime.between(1236, 1243)) {
            runScore = 53;
          } else if (totalRunTime.between(1242, 1249)) {
            runScore = 53;
          } else if (totalRunTime.between(1248, 1255)) {
            runScore = 52;
          } else if (totalRunTime.between(1254, 1261)) {
            runScore = 51;
          } else if (totalRunTime.between(1260, 1267)) {
            runScore = 50;
          } else if (totalRunTime.between(1266, 1273)) {
            runScore = 49;
          } else if (totalRunTime.between(1272, 1279)) {
            runScore = 48;
          } else if (totalRunTime.between(1278, 1285)) {
            runScore = 47;
          } else if (totalRunTime.between(1284, 1291)) {
            runScore = 46;
          } else if (totalRunTime.between(1290, 1297)) {
            runScore = 45;
          } else if (totalRunTime.between(1296, 1303)) {
            runScore = 44;
          } else if (totalRunTime.between(1302, 1309)) {
            runScore = 43;
          } else if (totalRunTime.between(1308, 1315)) {
            runScore = 42;
          } else if (totalRunTime.between(1314, 1321)) {
            runScore = 41;
          } else if (totalRunTime.between(1320, 1327)) {
            runScore = 40;
          } else if (totalRunTime.between(1326, 1333)) {
            runScore = 40;
          } else if (totalRunTime.between(1332, 1339)) {
            runScore = 39;
          } else if (totalRunTime.between(1338, 1345)) {
            runScore = 38;
          } else if (totalRunTime.between(1344, 1351)) {
            runScore = 37;
          } else if (totalRunTime.between(1350, 1357)) {
            runScore = 36;
          } else if (totalRunTime.between(1356, 1363)) {
            runScore = 35;
          } else if (totalRunTime.between(1362, 1369)) {
            runScore = 34;
          } else if (totalRunTime.between(1368, 1375)) {
            runScore = 33;
          } else if (totalRunTime.between(1374, 1381)) {
            runScore = 32;
          } else if (totalRunTime.between(1380, 1387)) {
            runScore = 31;
          } else if (totalRunTime.between(1386, 1393)) {
            runScore = 30;
          } else if (totalRunTime.between(1392, 1399)) {
            runScore = 29;
          } else if (totalRunTime.between(1398, 1405)) {
            runScore = 28;
          } else if (totalRunTime.between(1404, 1411)) {
            runScore = 27;
          } else if (totalRunTime.between(1410, 1417)) {
            runScore = 27;
          } else if (totalRunTime.between(1416, 1423)) {
            runScore = 26;
          } else if (totalRunTime.between(1422, 1429)) {
            runScore = 25;
          } else if (totalRunTime.between(1428, 1435)) {
            runScore = 24;
          } else if (totalRunTime.between(1434, 1441)) {
            runScore = 23;
          } else if (totalRunTime.between(1440, 1447)) {
            runScore = 22;
          } else if (totalRunTime.between(1446, 1453)) {
            runScore = 21;
          } else if (totalRunTime.between(1452, 1459)) {
            runScore = 20;
          } else if (totalRunTime.between(1458, 1465)) {
            runScore = 19;
          } else if (totalRunTime.between(1464, 1471)) {
            runScore = 18;
          } else if (totalRunTime.between(1470, 1477)) {
            runScore = 17;
          } else if (totalRunTime.between(1476, 1483)) {
            runScore = 16;
          } else if (totalRunTime.between(1482, 1489)) {
            runScore = 15;
          } else if (totalRunTime.between(1488, 1495)) {
            runScore = 14;
          } else if (totalRunTime.between(1494, 1501)) {
            runScore = 13;
          } else if (totalRunTime.between(1500, 1507)) {
            runScore = 13;
          } else if (totalRunTime.between(1506, 1513)) {
            runScore = 12;
          } else if (totalRunTime.between(1512, 1519)) {
            runScore = 11;
          } else if (totalRunTime.between(1518, 1525)) {
            runScore = 10;
          } else if (totalRunTime.between(1524, 1531)) {
            runScore = 9;
          } else if (totalRunTime.between(1530, 1537)) {
            runScore = 8;
          } else if (totalRunTime.between(1536, 1543)) {
            runScore = 7;
          } else if (totalRunTime.between(1542, 1549)) {
            runScore = 6;
          } else if (totalRunTime.between(1548, 1555)) {
            runScore = 5;
          } else if (totalRunTime.between(1554, 1561)) {
            runScore = 4;
          } else if (totalRunTime.between(1560, 1567)) {
            runScore = 3;
          } else if (totalRunTime.between(1566, 1573)) {
            runScore = 2;
          } else if (totalRunTime.between(1572, 1579)) {
            runScore = 1;
          } else if (totalRunTime.between(1578, 1585)) {
            runScore = 0;
          } else if (totalRunTime.between(1584, 1591)) {
            runScore = 0;
          } else if (totalRunTime > 1590) {
            runScore = 0;
          }
        } //close male 62 +

      } //close male if

      //female
      if (gender == 'female') {
        console.log('gender is female');

        if (age >= 17 && age <= 21) {
          console.log('age range is between 17 and 21');
          //calculate pushup score female 17-21
          if (puCount >= 42) {
            puScore = 100;
          } else if (puCount == 41) {
            puScore = 98;
          } else if (puCount == 40) {
            puScore = 97;
          } else if (puCount == 39) {
            puScore = 95;
          } else if (puCount == 38) {
            puScore = 93;
          } else if (puCount == 37) {
            puScore = 91;
          } else if (puCount == 36) {
            puScore = 90;
          } else if (puCount == 35) {
            puScore = 88;
          } else if (puCount == 34) {
            puScore = 86;
          } else if (puCount == 33) {
            puScore = 84;
          } else if (puCount == 32) {
            puScore = 83;
          } else if (puCount == 31) {
            puScore = 81;
          } else if (puCount == 30) {
            puScore = 79;
          } else if (puCount == 29) {
            puScore = 77;
          } else if (puCount == 28) {
            puScore = 76;
          } else if (puCount == 27) {
            puScore = 74;
          } else if (puCount == 26) {
            puScore = 72;
          } else if (puCount == 25) {
            puScore = 70;
          } else if (puCount == 24) {
            puScore = 69;
          } else if (puCount == 23) {
            puScore = 67;
          } else if (puCount == 22) {
            puScore = 65;
          } else if (puCount == 21) {
            puScore = 63;
          } else if (puCount == 20) {
            puScore = 62;
          } else if (puCount == 19) {
            puScore = 60;
          } else if (puCount == 18) {
            puScore = 58;
          } else if (puCount == 17) {
            puScore = 57;
          } else if (puCount == 16) {
            puScore = 55;
          } else if (puCount == 15) {
            puScore = 53;
          } else if (puCount == 14) {
            puScore = 51;
          } else if (puCount == 13) {
            puScore = 50;
          } else if (puCount == 12) {
            puScore = 48;
          } else if (puCount == 11) {
            puScore = 46;
          } else if (puCount == 10) {
            puScore = 44;
          } else if (puCount == 9) {
            puScore = 43;
          } else if (puCount == 8) {
            puScore = 41;
          } else if (puCount == 7) {
            puScore = 39;
          } else if (puCount == 6) {
            puScore = 37;
          } else if (puCount == 5) {
            puScore = 36;
          } else if (puCount == 4) {
            puScore = 34;
          } else if (puCount == 3) {
            puScore = 32;
          } else if (puCount == 2) {
            puScore = 30;
          } else if (puCount == 1) {
            puScore = 29;
          } else if (puCount == 0) {
            puScore = 0;
          }
          //calculate situp score female 17-21
          if (suCount >= 78) {
            suScore = 100;
          } else if (suCount == 77) {
            suScore = 98;
          } else if (suCount == 76) {
            suScore = 97;
          } else if (suCount == 75) {
            suScore = 95;
          } else if (suCount == 74) {
            suScore = 94;
          } else if (suCount == 73) {
            suScore = 92;
          } else if (suCount == 72) {
            suScore = 90;
          } else if (suCount == 71) {
            suScore = 89;
          } else if (suCount == 70) {
            suScore = 87;
          } else if (suCount == 69) {
            suScore = 86;
          } else if (suCount == 68) {
            suScore = 84;
          } else if (suCount == 67) {
            suScore = 82;
          } else if (suCount == 66) {
            suScore = 81;
          } else if (suCount == 65) {
            suScore = 79;
          } else if (suCount == 64) {
            suScore = 78;
          } else if (suCount == 63) {
            suScore = 76;
          } else if (suCount == 62) {
            suScore = 74;
          } else if (suCount == 61) {
            suScore = 73;
          } else if (suCount == 60) {
            suScore = 71;
          } else if (suCount == 59) {
            suScore = 70;
          } else if (suCount == 58) {
            suScore = 68;
          } else if (suCount == 57) {
            suScore = 66;
          } else if (suCount == 56) {
            suScore = 65;
          } else if (suCount == 55) {
            suScore = 63;
          } else if (suCount == 54) {
            suScore = 62;
          } else if (suCount == 53) {
            suScore = 60;
          } else if (suCount == 52) {
            suScore = 58;
          } else if (suCount == 51) {
            suScore = 57;
          } else if (suCount == 50) {
            suScore = 55;
          } else if (suCount == 49) {
            suScore = 54;
          } else if (suCount == 48) {
            suScore = 52;
          } else if (suCount == 47) {
            suScore = 50;
          } else if (suCount == 46) {
            suScore = 49;
          } else if (suCount == 45) {
            suScore = 47;
          } else if (suCount == 44) {
            suScore = 46;
          } else if (suCount == 43) {
            suScore = 44;
          } else if (suCount == 42) {
            suScore = 42;
          } else if (suCount == 41) {
            suScore = 41;
          } else if (suCount == 40) {
            suScore = 39;
          } else if (suCount == 39) {
            suScore = 38;
          } else if (suCount == 38) {
            suScore = 36;
          } else if (suCount == 37) {
            suScore = 34;
          } else if (suCount == 36) {
            suScore = 33;
          } else if (suCount == 35) {
            suScore = 31;
          } else if (suCount == 34) {
            suScore = 30;
          } else if (suCount == 33) {
            suScore = 28;
          } else if (suCount == 32) {
            suScore = 26;
          } else if (suCount == 31) {
            suScore = 25;
          } else if (suCount == 30) {
            suScore = 23;
          } else if (suCount == 29) {
            suScore = 22;
          } else if (suCount == 28) {
            suScore = 20;
          } else if (suCount == 27) {
            suScore = 18;
          } else if (suCount == 26) {
            suScore = 17;
          } else if (suCount == 25) {
            suScore = 15;
          } else if (suCount == 24) {
            suScore = 14;
          } else if (suCount == 23) {
            suScore = 12;
          } else if (suCount == 22) {
            suScore = 10;
          } else if (suCount == 21) {
            suScore = 9;
          } else if (suCount < 21) {
            suScore = 0;
          }
          //calculate run score female 17-21
          if (totalRunTime <= 936) {
            runScore = 100;
          } else if (totalRunTime.between(936, 943)) {
            runScore = 99;
          } else if (totalRunTime.between(942, 949)) {
            runScore = 98;
          } else if (totalRunTime.between(948, 955)) {
            runScore = 96;
          } else if (totalRunTime.between(954, 961)) {
            runScore = 95;
          } else if (totalRunTime.between(960, 967)) {
            runScore = 94;
          } else if (totalRunTime.between(966, 973)) {
            runScore = 93;
          } else if (totalRunTime.between(972, 979)) {
            runScore = 92;
          } else if (totalRunTime.between(978, 985)) {
            runScore = 90;
          } else if (totalRunTime.between(984, 991)) {
            runScore = 89;
          } else if (totalRunTime.between(990, 997)) {
            runScore = 88;
          } else if (totalRunTime.between(996, 1003)) {
            runScore = 87;
          } else if (totalRunTime.between(1002, 1009)) {
            runScore = 85;
          } else if (totalRunTime.between(1008, 1015)) {
            runScore = 84;
          } else if (totalRunTime.between(1014, 1021)) {
            runScore = 83;
          } else if (totalRunTime.between(1020, 1027)) {
            runScore = 82;
          } else if (totalRunTime.between(1026, 1033)) {
            runScore = 81;
          } else if (totalRunTime.between(1032, 1039)) {
            runScore = 79;
          } else if (totalRunTime.between(1038, 1045)) {
            runScore = 78;
          } else if (totalRunTime.between(1044, 1051)) {
            runScore = 77;
          } else if (totalRunTime.between(1050, 1057)) {
            runScore = 76;
          } else if (totalRunTime.between(1056, 1063)) {
            runScore = 75;
          } else if (totalRunTime.between(1062, 1069)) {
            runScore = 73;
          } else if (totalRunTime.between(1068, 1075)) {
            runScore = 72;
          } else if (totalRunTime.between(1074, 1081)) {
            runScore = 71;
          } else if (totalRunTime.between(1080, 1087)) {
            runScore = 70;
          } else if (totalRunTime.between(1086, 1093)) {
            runScore = 68;
          } else if (totalRunTime.between(1092, 1099)) {
            runScore = 67;
          } else if (totalRunTime.between(1098, 1105)) {
            runScore = 66;
          } else if (totalRunTime.between(1104, 1111)) {
            runScore = 65;
          } else if (totalRunTime.between(1110, 1117)) {
            runScore = 64;
          } else if (totalRunTime.between(1116, 1123)) {
            runScore = 62;
          } else if (totalRunTime.between(1122, 1129)) {
            runScore = 61;
          } else if (totalRunTime.between(1128, 1135)) {
            runScore = 60;
          } else if (totalRunTime.between(1134, 1141)) {
            runScore = 59;
          } else if (totalRunTime.between(1140, 1147)) {
            runScore = 58;
          } else if (totalRunTime.between(1146, 1153)) {
            runScore = 56;
          } else if (totalRunTime.between(1152, 1159)) {
            runScore = 55;
          } else if (totalRunTime.between(1158, 1165)) {
            runScore = 54;
          } else if (totalRunTime.between(1164, 1171)) {
            runScore = 53;
          } else if (totalRunTime.between(1170, 1177)) {
            runScore = 52;
          } else if (totalRunTime.between(1176, 1183)) {
            runScore = 50;
          } else if (totalRunTime.between(1182, 1189)) {
            runScore = 49;
          } else if (totalRunTime.between(1188, 1195)) {
            runScore = 48;
          } else if (totalRunTime.between(1194, 1201)) {
            runScore = 47;
          } else if (totalRunTime.between(1200, 1207)) {
            runScore = 45;
          } else if (totalRunTime.between(1206, 1213)) {
            runScore = 44;
          } else if (totalRunTime.between(1212, 1219)) {
            runScore = 43;
          } else if (totalRunTime.between(1218, 1225)) {
            runScore = 42;
          } else if (totalRunTime.between(1224, 1231)) {
            runScore = 41;
          } else if (totalRunTime.between(1230, 1237)) {
            runScore = 39;
          } else if (totalRunTime.between(1236, 1243)) {
            runScore = 38;
          } else if (totalRunTime.between(1242, 1249)) {
            runScore = 37;
          } else if (totalRunTime.between(1248, 1255)) {
            runScore = 36;
          } else if (totalRunTime.between(1254, 1261)) {
            runScore = 35;
          } else if (totalRunTime.between(1260, 1267)) {
            runScore = 33;
          } else if (totalRunTime.between(1266, 1273)) {
            runScore = 32;
          } else if (totalRunTime.between(1272, 1279)) {
            runScore = 31;
          } else if (totalRunTime.between(1278, 1285)) {
            runScore = 30;
          } else if (totalRunTime.between(1284, 1291)) {
            runScore = 28;
          } else if (totalRunTime.between(1290, 1297)) {
            runScore = 27;
          } else if (totalRunTime.between(1296, 1303)) {
            runScore = 26;
          } else if (totalRunTime.between(1302, 1309)) {
            runScore = 25;
          } else if (totalRunTime.between(1308, 1315)) {
            runScore = 24;
          } else if (totalRunTime.between(1314, 1321)) {
            runScore = 22;
          } else if (totalRunTime.between(1320, 1327)) {
            runScore = 21;
          } else if (totalRunTime.between(1326, 1333)) {
            runScore = 20;
          } else if (totalRunTime.between(1332, 1339)) {
            runScore = 19;
          } else if (totalRunTime.between(1338, 1345)) {
            runScore = 18;
          } else if (totalRunTime.between(1344, 1351)) {
            runScore = 16;
          } else if (totalRunTime.between(1350, 1357)) {
            runScore = 15;
          } else if (totalRunTime.between(1356, 1363)) {
            runScore = 14;
          } else if (totalRunTime.between(1362, 1369)) {
            runScore = 13;
          } else if (totalRunTime.between(1368, 1375)) {
            runScore = 12;
          } else if (totalRunTime.between(1374, 1381)) {
            runScore = 10;
          } else if (totalRunTime.between(1380, 1387)) {
            runScore = 9;
          } else if (totalRunTime.between(1386, 1393)) {
            runScore = 8;
          } else if (totalRunTime.between(1392, 1399)) {
            runScore = 7;
          } else if (totalRunTime.between(1398, 1405)) {
            runScore = 5;
          } else if (totalRunTime.between(1404, 1411)) {
            runScore = 4;
          } else if (totalRunTime.between(1410, 1417)) {
            runScore = 3;
          } else if (totalRunTime.between(1416, 1423)) {
            runScore = 2;
          } else if (totalRunTime.between(1422, 1429)) {
            runScore = 1;
          } else if (totalRunTime > 1428) {
            runScore = 0;
          }
        } //close female 17 - 21 age range

        if (age >= 22 && age <= 26) {
          console.log('age range is between 22 and 26');
          //calculate pushup score female 22-26
          if (puCount >= 46) {
            puScore = 100;
          } else if (puCount == 45) {
            puScore = 99;
          } else if (puCount == 44) {
            puScore = 97;
          } else if (puCount == 43) {
            puScore = 96;
          } else if (puCount == 42) {
            puScore = 94;
          } else if (puCount == 41) {
            puScore = 93;
          } else if (puCount == 40) {
            puScore = 92;
          } else if (puCount == 39) {
            puScore = 90;
          } else if (puCount == 38) {
            puScore = 89;
          } else if (puCount == 37) {
            puScore = 88;
          } else if (puCount == 36) {
            puScore = 86;
          } else if (puCount == 35) {
            puScore = 85;
          } else if (puCount == 34) {
            puScore = 83;
          } else if (puCount == 33) {
            puScore = 82;
          } else if (puCount == 32) {
            puScore = 81;
          } else if (puCount == 31) {
            puScore = 79;
          } else if (puCount == 30) {
            puScore = 78;
          } else if (puCount == 29) {
            puScore = 77;
          } else if (puCount == 28) {
            puScore = 76;
          } else if (puCount == 27) {
            puScore = 74;
          } else if (puCount == 26) {
            puScore = 72;
          } else if (puCount == 25) {
            puScore = 71;
          } else if (puCount == 24) {
            puScore = 70;
          } else if (puCount == 23) {
            puScore = 68;
          } else if (puCount == 22) {
            puScore = 67;
          } else if (puCount == 21) {
            puScore = 66;
          } else if (puCount == 20) {
            puScore = 64;
          } else if (puCount == 19) {
            puScore = 63;
          } else if (puCount == 18) {
            puScore = 61;
          } else if (puCount == 17) {
            puScore = 60;
          } else if (puCount == 16) {
            puScore = 59;
          } else if (puCount == 15) {
            puScore = 57;
          } else if (puCount == 14) {
            puScore = 56;
          } else if (puCount == 13) {
            puScore = 54;
          } else if (puCount == 12) {
            puScore = 52;
          } else if (puCount == 11) {
            puScore = 50;
          } else if (puCount == 10) {
            puScore = 49;
          } else if (puCount == 9) {
            puScore = 49;
          } else if (puCount == 8) {
            puScore = 48;
          } else if (puCount == 7) {
            puScore = 46;
          } else if (puCount == 6) {
            puScore = 45;
          } else if (puCount == 5) {
            puScore = 43;
          } else if (puCount == 4) {
            puScore = 42;
          } else if (puCount == 3) {
            puScore = 41;
          } else if (puCount == 2) {
            puScore = 39;
          } else if (puCount == 1) {
            puScore = 38;
          } else if (puCount == 0) {
            puScore = 0;
          }
          //calculate situp score female 22-26
          if (suCount >= 80) {
            suScore = 100;
          } else if (suCount == 79) {
            suScore = 99;
          } else if (suCount == 78) {
            suScore = 97;
          } else if (suCount == 77) {
            suScore = 96;
          } else if (suCount == 76) {
            suScore = 95;
          } else if (suCount == 75) {
            suScore = 93;
          } else if (suCount == 74) {
            suScore = 92;
          } else if (suCount == 73) {
            suScore = 91;
          } else if (suCount == 72) {
            suScore = 89;
          } else if (suCount == 71) {
            suScore = 88;
          } else if (suCount == 70) {
            suScore = 87;
          } else if (suCount == 69) {
            suScore = 85;
          } else if (suCount == 68) {
            suScore = 84;
          } else if (suCount == 67) {
            suScore = 83;
          } else if (suCount == 66) {
            suScore = 81;
          } else if (suCount == 65) {
            suScore = 80;
          } else if (suCount == 64) {
            suScore = 79;
          } else if (suCount == 63) {
            suScore = 77;
          } else if (suCount == 62) {
            suScore = 76;
          } else if (suCount == 61) {
            suScore = 75;
          } else if (suCount == 60) {
            suScore = 73;
          } else if (suCount == 59) {
            suScore = 72;
          } else if (suCount == 58) {
            suScore = 71;
          } else if (suCount == 57) {
            suScore = 69;
          } else if (suCount == 56) {
            suScore = 68;
          } else if (suCount == 55) {
            suScore = 67;
          } else if (suCount == 54) {
            suScore = 65;
          } else if (suCount == 53) {
            suScore = 64;
          } else if (suCount == 52) {
            suScore = 63;
          } else if (suCount == 51) {
            suScore = 61;
          } else if (suCount == 50) {
            suScore = 60;
          } else if (suCount == 49) {
            suScore = 59;
          } else if (suCount == 48) {
            suScore = 57;
          } else if (suCount == 47) {
            suScore = 56;
          } else if (suCount == 46) {
            suScore = 55;
          } else if (suCount == 45) {
            suScore = 53;
          } else if (suCount == 44) {
            suScore = 52;
          } else if (suCount == 43) {
            suScore = 50;
          } else if (suCount == 42) {
            suScore = 49;
          } else if (suCount == 41) {
            suScore = 48;
          } else if (suCount == 40) {
            suScore = 47;
          } else if (suCount == 39) {
            suScore = 45;
          } else if (suCount == 38) {
            suScore = 44;
          } else if (suCount == 37) {
            suScore = 43;
          } else if (suCount == 36) {
            suScore = 41;
          } else if (suCount == 35) {
            suScore = 40;
          } else if (suCount == 34) {
            suScore = 39;
          } else if (suCount == 33) {
            suScore = 37;
          } else if (suCount == 32) {
            suScore = 36;
          } else if (suCount == 31) {
            suScore = 35;
          } else if (suCount == 30) {
            suScore = 33;
          } else if (suCount == 29) {
            suScore = 32;
          } else if (suCount == 28) {
            suScore = 31;
          } else if (suCount == 27) {
            suScore = 29;
          } else if (suCount == 26) {
            suScore = 28;
          } else if (suCount == 25) {
            suScore = 27;
          } else if (suCount == 24) {
            suScore = 25;
          } else if (suCount == 23) {
            suScore = 24;
          } else if (suCount == 22) {
            suScore = 23;
          } else if (suCount == 21) {
            suScore = 21;
          } else if (suCount < 21) {
            suScore = 0;
          }
          //calculate run score female 22-26
          if (totalRunTime <= 936) {
            runScore = 100;
          } else if (totalRunTime.between(936, 943)) {
            runScore = 99;
          } else if (totalRunTime.between(942, 949)) {
            runScore = 98;
          } else if (totalRunTime.between(948, 955)) {
            runScore = 97;
          } else if (totalRunTime.between(954, 961)) {
            runScore = 96;
          } else if (totalRunTime.between(960, 967)) {
            runScore = 95;
          } else if (totalRunTime.between(966, 973)) {
            runScore = 94;
          } else if (totalRunTime.between(972, 979)) {
            runScore = 93;
          } else if (totalRunTime.between(978, 985)) {
            runScore = 92;
          } else if (totalRunTime.between(984, 991)) {
            runScore = 91;
          } else if (totalRunTime.between(990, 997)) {
            runScore = 90;
          } else if (totalRunTime.between(996, 1003)) {
            runScore = 89;
          } else if (totalRunTime.between(1002, 1009)) {
            runScore = 88;
          } else if (totalRunTime.between(1008, 1015)) {
            runScore = 87;
          } else if (totalRunTime.between(1014, 1021)) {
            runScore = 86;
          } else if (totalRunTime.between(1020, 1027)) {
            runScore = 85;
          } else if (totalRunTime.between(1026, 1033)) {
            runScore = 84;
          } else if (totalRunTime.between(1032, 1039)) {
            runScore = 83;
          } else if (totalRunTime.between(1038, 1045)) {
            runScore = 82;
          } else if (totalRunTime.between(1044, 1051)) {
            runScore = 81;
          } else if (totalRunTime.between(1050, 1057)) {
            runScore = 80;
          } else if (totalRunTime.between(1056, 1063)) {
            runScore = 79;
          } else if (totalRunTime.between(1062, 1069)) {
            runScore = 78;
          } else if (totalRunTime.between(1068, 1075)) {
            runScore = 77;
          } else if (totalRunTime.between(1074, 1081)) {
            runScore = 76;
          } else if (totalRunTime.between(1080, 1087)) {
            runScore = 75;
          } else if (totalRunTime.between(1086, 1093)) {
            runScore = 74;
          } else if (totalRunTime.between(1092, 1099)) {
            runScore = 73;
          } else if (totalRunTime.between(1098, 1105)) {
            runScore = 72;
          } else if (totalRunTime.between(1104, 1111)) {
            runScore = 71;
          } else if (totalRunTime.between(1110, 1117)) {
            runScore = 70;
          } else if (totalRunTime.between(1116, 1123)) {
            runScore = 69;
          } else if (totalRunTime.between(1122, 1129)) {
            runScore = 68;
          } else if (totalRunTime.between(1128, 1135)) {
            runScore = 67;
          } else if (totalRunTime.between(1134, 1141)) {
            runScore = 66;
          } else if (totalRunTime.between(1140, 1147)) {
            runScore = 65;
          } else if (totalRunTime.between(1146, 1153)) {
            runScore = 64;
          } else if (totalRunTime.between(1152, 1159)) {
            runScore = 63;
          } else if (totalRunTime.between(1158, 1165)) {
            runScore = 62;
          } else if (totalRunTime.between(1164, 1171)) {
            runScore = 61;
          } else if (totalRunTime.between(1170, 1177)) {
            runScore = 60;
          } else if (totalRunTime.between(1176, 1183)) {
            runScore = 59;
          } else if (totalRunTime.between(1182, 1189)) {
            runScore = 58;
          } else if (totalRunTime.between(1188, 1195)) {
            runScore = 57;
          } else if (totalRunTime.between(1194, 1201)) {
            runScore = 56;
          } else if (totalRunTime.between(1200, 1207)) {
            runScore = 55;
          } else if (totalRunTime.between(1206, 1213)) {
            runScore = 54;
          } else if (totalRunTime.between(1212, 1219)) {
            runScore = 53;
          } else if (totalRunTime.between(1218, 1225)) {
            runScore = 52;
          } else if (totalRunTime.between(1224, 1231)) {
            runScore = 51;
          } else if (totalRunTime.between(1230, 1237)) {
            runScore = 50;
          } else if (totalRunTime.between(1236, 1243)) {
            runScore = 49;
          } else if (totalRunTime.between(1242, 1249)) {
            runScore = 48;
          } else if (totalRunTime.between(1248, 1255)) {
            runScore = 47;
          } else if (totalRunTime.between(1254, 1261)) {
            runScore = 46;
          } else if (totalRunTime.between(1260, 1267)) {
            runScore = 45;
          } else if (totalRunTime.between(1266, 1273)) {
            runScore = 44;
          } else if (totalRunTime.between(1272, 1279)) {
            runScore = 43;
          } else if (totalRunTime.between(1278, 1285)) {
            runScore = 42;
          } else if (totalRunTime.between(1284, 1291)) {
            runScore = 41;
          } else if (totalRunTime.between(1290, 1297)) {
            runScore = 40;
          } else if (totalRunTime.between(1296, 1303)) {
            runScore = 39;
          } else if (totalRunTime.between(1302, 1309)) {
            runScore = 38;
          } else if (totalRunTime.between(1308, 1315)) {
            runScore = 37;
          } else if (totalRunTime.between(1314, 1321)) {
            runScore = 36;
          } else if (totalRunTime.between(1320, 1327)) {
            runScore = 35;
          } else if (totalRunTime.between(1326, 1333)) {
            runScore = 34;
          } else if (totalRunTime.between(1332, 1339)) {
            runScore = 33;
          } else if (totalRunTime.between(1338, 1345)) {
            runScore = 32;
          } else if (totalRunTime.between(1344, 1351)) {
            runScore = 31;
          } else if (totalRunTime.between(1350, 1357)) {
            runScore = 30;
          } else if (totalRunTime.between(1356, 1363)) {
            runScore = 29;
          } else if (totalRunTime.between(1362, 1369)) {
            runScore = 28;
          } else if (totalRunTime.between(1368, 1375)) {
            runScore = 27;
          } else if (totalRunTime.between(1374, 1381)) {
            runScore = 26;
          } else if (totalRunTime.between(1380, 1387)) {
            runScore = 25;
          } else if (totalRunTime.between(1386, 1393)) {
            runScore = 24;
          } else if (totalRunTime.between(1392, 1399)) {
            runScore = 23;
          } else if (totalRunTime.between(1398, 1405)) {
            runScore = 22;
          } else if (totalRunTime.between(1404, 1411)) {
            runScore = 21;
          } else if (totalRunTime.between(1410, 1417)) {
            runScore = 20;
          } else if (totalRunTime.between(1416, 1423)) {
            runScore = 19;
          } else if (totalRunTime.between(1422, 1429)) {
            runScore = 18;
          } else if (totalRunTime.between(1428, 1435)) {
            runScore = 17;
          } else if (totalRunTime.between(1434, 1441)) {
            runScore = 16;
          } else if (totalRunTime.between(1440, 1447)) {
            runScore = 15;
          } else if (totalRunTime.between(1446, 1453)) {
            runScore = 14;
          } else if (totalRunTime.between(1452, 1459)) {
            runScore = 13;
          } else if (totalRunTime.between(1458, 1465)) {
            runScore = 12;
          } else if (totalRunTime.between(1464, 1471)) {
            runScore = 11;
          } else if (totalRunTime.between(1470, 1477)) {
            runScore = 10;
          } else if (totalRunTime.between(1476, 1483)) {
            runScore = 9;
          } else if (totalRunTime.between(1482, 1489)) {
            runScore = 8;
          } else if (totalRunTime.between(1488, 1495)) {
            runScore = 7;
          } else if (totalRunTime.between(1494, 1501)) {
            runScore = 6;
          } else if (totalRunTime.between(1500, 1507)) {
            runScore = 5;
          } else if (totalRunTime.between(1506, 1513)) {
            runScore = 4;
          } else if (totalRunTime.between(1512, 1519)) {
            runScore = 3;
          } else if (totalRunTime.between(1518, 1525)) {
            runScore = 2;
          } else if (totalRunTime.between(1524, 1531)) {
            runScore = 1;
          } else if (totalRunTime > 1530) {
            runScore = 0;
          }
        } //close female 22 - 26 age range

        if (age >= 27 && age <= 31) {
          console.log('age range is between 27 and 31');
          //calculate pushup score female 27-31
          if (puCount >= 50) {
            puScore = 100;
          } else if (puCount == 49) {
            puScore = 99;
          } else if (puCount == 48) {
            puScore = 98;
          } else if (puCount == 47) {
            puScore = 96;
          } else if (puCount == 46) {
            puScore = 95;
          } else if (puCount == 45) {
            puScore = 94;
          } else if (puCount == 44) {
            puScore = 93;
          } else if (puCount == 43) {
            puScore = 92;
          } else if (puCount == 42) {
            puScore = 90;
          } else if (puCount == 41) {
            puScore = 89;
          } else if (puCount == 40) {
            puScore = 88;
          } else if (puCount == 39) {
            puScore = 87;
          } else if (puCount == 38) {
            puScore = 85;
          } else if (puCount == 37) {
            puScore = 84;
          } else if (puCount == 36) {
            puScore = 83;
          } else if (puCount == 35) {
            puScore = 82;
          } else if (puCount == 34) {
            puScore = 81;
          } else if (puCount == 33) {
            puScore = 79;
          } else if (puCount == 32) {
            puScore = 78;
          } else if (puCount == 31) {
            puScore = 77;
          } else if (puCount == 30) {
            puScore = 76;
          } else if (puCount == 29) {
            puScore = 75;
          } else if (puCount == 28) {
            puScore = 73;
          } else if (puCount == 27) {
            puScore = 72;
          } else if (puCount == 26) {
            puScore = 71;
          } else if (puCount == 25) {
            puScore = 70;
          } else if (puCount == 24) {
            puScore = 68;
          } else if (puCount == 23) {
            puScore = 67;
          } else if (puCount == 22) {
            puScore = 66;
          } else if (puCount == 21) {
            puScore = 65;
          } else if (puCount == 20) {
            puScore = 64;
          } else if (puCount == 19) {
            puScore = 62;
          } else if (puCount == 18) {
            puScore = 61;
          } else if (puCount == 17) {
            puScore = 60;
          } else if (puCount == 16) {
            puScore = 59;
          } else if (puCount == 15) {
            puScore = 58;
          } else if (puCount == 14) {
            puScore = 56;
          } else if (puCount == 13) {
            puScore = 55;
          } else if (puCount == 12) {
            puScore = 54;
          } else if (puCount == 11) {
            puScore = 52;
          } else if (puCount == 10) {
            puScore = 50;
          } else if (puCount == 9) {
            puScore = 49;
          } else if (puCount == 8) {
            puScore = 49;
          } else if (puCount == 7) {
            puScore = 48;
          } else if (puCount == 6) {
            puScore = 47;
          } else if (puCount == 5) {
            puScore = 45;
          } else if (puCount == 4) {
            puScore = 44;
          } else if (puCount == 3) {
            puScore = 43;
          } else if (puCount == 2) {
            puScore = 42;
          } else if (puCount == 1) {
            puScore = 41;
          } else if (puCount == 0) {
            puScore = 0;
          }
          //calculate situp score female 27-31
          if (suCount >= 82) {
            suScore = 100;
          } else if (suCount == 81) {
            suScore = 99;
          } else if (suCount == 80) {
            suScore = 98;
          } else if (suCount == 79) {
            suScore = 97;
          } else if (suCount == 78) {
            suScore = 96;
          } else if (suCount == 77) {
            suScore = 95;
          } else if (suCount == 76) {
            suScore = 94;
          } else if (suCount == 75) {
            suScore = 92;
          } else if (suCount == 74) {
            suScore = 91;
          } else if (suCount == 73) {
            suScore = 90;
          } else if (suCount == 72) {
            suScore = 89;
          } else if (suCount == 71) {
            suScore = 88;
          } else if (suCount == 70) {
            suScore = 87;
          } else if (suCount == 69) {
            suScore = 86;
          } else if (suCount == 68) {
            suScore = 85;
          } else if (suCount == 67) {
            suScore = 84;
          } else if (suCount == 66) {
            suScore = 83;
          } else if (suCount == 65) {
            suScore = 82;
          } else if (suCount == 64) {
            suScore = 81;
          } else if (suCount == 63) {
            suScore = 79;
          } else if (suCount == 62) {
            suScore = 78;
          } else if (suCount == 61) {
            suScore = 77;
          } else if (suCount == 60) {
            suScore = 76;
          } else if (suCount == 59) {
            suScore = 75;
          } else if (suCount == 58) {
            suScore = 74;
          } else if (suCount == 57) {
            suScore = 73;
          } else if (suCount == 56) {
            suScore = 72;
          } else if (suCount == 55) {
            suScore = 71;
          } else if (suCount == 54) {
            suScore = 70;
          } else if (suCount == 53) {
            suScore = 69;
          } else if (suCount == 52) {
            suScore = 68;
          } else if (suCount == 51) {
            suScore = 66;
          } else if (suCount == 50) {
            suScore = 65;
          } else if (suCount == 49) {
            suScore = 64;
          } else if (suCount == 48) {
            suScore = 63;
          } else if (suCount == 47) {
            suScore = 62;
          } else if (suCount == 46) {
            suScore = 61;
          } else if (suCount == 45) {
            suScore = 60;
          } else if (suCount == 44) {
            suScore = 59;
          } else if (suCount == 43) {
            suScore = 58;
          } else if (suCount == 42) {
            suScore = 57;
          } else if (suCount == 41) {
            suScore = 56;
          } else if (suCount == 40) {
            suScore = 55;
          } else if (suCount == 39) {
            suScore = 54;
          } else if (suCount == 38) {
            suScore = 52;
          } else if (suCount == 37) {
            suScore = 51;
          } else if (suCount == 36) {
            suScore = 50;
          } else if (suCount == 35) {
            suScore = 49;
          } else if (suCount == 34) {
            suScore = 48;
          } else if (suCount == 33) {
            suScore = 47;
          } else if (suCount == 32) {
            suScore = 46;
          } else if (suCount == 31) {
            suScore = 45;
          } else if (suCount == 30) {
            suScore = 44;
          } else if (suCount == 29) {
            suScore = 43;
          } else if (suCount == 28) {
            suScore = 42;
          } else if (suCount == 27) {
            suScore = 41;
          } else if (suCount == 26) {
            suScore = 39;
          } else if (suCount == 25) {
            suScore = 38;
          } else if (suCount == 24) {
            suScore = 37;
          } else if (suCount == 23) {
            suScore = 36;
          } else if (suCount == 22) {
            suScore = 35;
          } else if (suCount == 21) {
            suScore = 34;
          } else if (suCount < 21) {
            suScore = 0;
          }
          //calculate run score female 27-31
          if (totalRunTime <= 948) {
            runScore = 100;
          } else if (totalRunTime.between(948, 955)) {
            runScore = 99;
          } else if (totalRunTime.between(954, 961)) {
            runScore = 98;
          } else if (totalRunTime.between(960, 967)) {
            runScore = 97;
          } else if (totalRunTime.between(966, 973)) {
            runScore = 97;
          } else if (totalRunTime.between(972, 979)) {
            runScore = 96;
          } else if (totalRunTime.between(978, 985)) {
            runScore = 95;
          } else if (totalRunTime.between(984, 991)) {
            runScore = 94;
          } else if (totalRunTime.between(990, 997)) {
            runScore = 93;
          } else if (totalRunTime.between(996, 1003)) {
            runScore = 92;
          } else if (totalRunTime.between(1002, 1009)) {
            runScore = 91;
          } else if (totalRunTime.between(1008, 1015)) {
            runScore = 91;
          } else if (totalRunTime.between(1014, 1021)) {
            runScore = 90;
          } else if (totalRunTime.between(1020, 1027)) {
            runScore = 89;
          } else if (totalRunTime.between(1026, 1033)) {
            runScore = 88;
          } else if (totalRunTime.between(1032, 1039)) {
            runScore = 87;
          } else if (totalRunTime.between(1038, 1045)) {
            runScore = 86;
          } else if (totalRunTime.between(1044, 1051)) {
            runScore = 86;
          } else if (totalRunTime.between(1050, 1057)) {
            runScore = 85;
          } else if (totalRunTime.between(1056, 1063)) {
            runScore = 84;
          } else if (totalRunTime.between(1062, 1069)) {
            runScore = 83;
          } else if (totalRunTime.between(1068, 1075)) {
            runScore = 82;
          } else if (totalRunTime.between(1074, 1081)) {
            runScore = 81;
          } else if (totalRunTime.between(1080, 1087)) {
            runScore = 80;
          } else if (totalRunTime.between(1086, 1093)) {
            runScore = 80;
          } else if (totalRunTime.between(1092, 1099)) {
            runScore = 79;
          } else if (totalRunTime.between(1098, 1105)) {
            runScore = 78;
          } else if (totalRunTime.between(1104, 1111)) {
            runScore = 77;
          } else if (totalRunTime.between(1110, 1117)) {
            runScore = 76;
          } else if (totalRunTime.between(1116, 1123)) {
            runScore = 75;
          } else if (totalRunTime.between(1122, 1129)) {
            runScore = 74;
          } else if (totalRunTime.between(1128, 1135)) {
            runScore = 74;
          } else if (totalRunTime.between(1134, 1141)) {
            runScore = 73;
          } else if (totalRunTime.between(1140, 1147)) {
            runScore = 72;
          } else if (totalRunTime.between(1146, 1153)) {
            runScore = 71;
          } else if (totalRunTime.between(1152, 1159)) {
            runScore = 70;
          } else if (totalRunTime.between(1158, 1165)) {
            runScore = 69;
          } else if (totalRunTime.between(1164, 1171)) {
            runScore = 69;
          } else if (totalRunTime.between(1170, 1177)) {
            runScore = 68;
          } else if (totalRunTime.between(1176, 1183)) {
            runScore = 67;
          } else if (totalRunTime.between(1182, 1189)) {
            runScore = 66;
          } else if (totalRunTime.between(1188, 1195)) {
            runScore = 65;
          } else if (totalRunTime.between(1194, 1201)) {
            runScore = 64;
          } else if (totalRunTime.between(1200, 1207)) {
            runScore = 63;
          } else if (totalRunTime.between(1206, 1213)) {
            runScore = 63;
          } else if (totalRunTime.between(1212, 1219)) {
            runScore = 62;
          } else if (totalRunTime.between(1218, 1225)) {
            runScore = 61;
          } else if (totalRunTime.between(1224, 1231)) {
            runScore = 60;
          } else if (totalRunTime.between(1230, 1237)) {
            runScore = 59;
          } else if (totalRunTime.between(1236, 1243)) {
            runScore = 58;
          } else if (totalRunTime.between(1242, 1249)) {
            runScore = 57;
          } else if (totalRunTime.between(1248, 1255)) {
            runScore = 57;
          } else if (totalRunTime.between(1254, 1261)) {
            runScore = 56;
          } else if (totalRunTime.between(1260, 1267)) {
            runScore = 55;
          } else if (totalRunTime.between(1266, 1273)) {
            runScore = 54;
          } else if (totalRunTime.between(1272, 1279)) {
            runScore = 53;
          } else if (totalRunTime.between(1278, 1285)) {
            runScore = 52;
          } else if (totalRunTime.between(1284, 1291)) {
            runScore = 51;
          } else if (totalRunTime.between(1290, 1297)) {
            runScore = 51;
          } else if (totalRunTime.between(1296, 1303)) {
            runScore = 50;
          } else if (totalRunTime.between(1302, 1309)) {
            runScore = 49;
          } else if (totalRunTime.between(1308, 1315)) {
            runScore = 48;
          } else if (totalRunTime.between(1314, 1321)) {
            runScore = 47;
          } else if (totalRunTime.between(1320, 1327)) {
            runScore = 46;
          } else if (totalRunTime.between(1326, 1333)) {
            runScore = 46;
          } else if (totalRunTime.between(1332, 1339)) {
            runScore = 45;
          } else if (totalRunTime.between(1338, 1345)) {
            runScore = 44;
          } else if (totalRunTime.between(1344, 1351)) {
            runScore = 43;
          } else if (totalRunTime.between(1350, 1357)) {
            runScore = 42;
          } else if (totalRunTime.between(1356, 1363)) {
            runScore = 41;
          } else if (totalRunTime.between(1362, 1369)) {
            runScore = 40;
          } else if (totalRunTime.between(1368, 1375)) {
            runScore = 40;
          } else if (totalRunTime.between(1374, 1381)) {
            runScore = 39;
          } else if (totalRunTime.between(1380, 1387)) {
            runScore = 38;
          } else if (totalRunTime.between(1386, 1393)) {
            runScore = 37;
          } else if (totalRunTime.between(1392, 1399)) {
            runScore = 36;
          } else if (totalRunTime.between(1398, 1405)) {
            runScore = 35;
          } else if (totalRunTime.between(1404, 1411)) {
            runScore = 34;
          } else if (totalRunTime.between(1410, 1417)) {
            runScore = 34;
          } else if (totalRunTime.between(1416, 1423)) {
            runScore = 33;
          } else if (totalRunTime.between(1422, 1429)) {
            runScore = 32;
          } else if (totalRunTime.between(1428, 1435)) {
            runScore = 31;
          } else if (totalRunTime.between(1434, 1441)) {
            runScore = 30;
          } else if (totalRunTime.between(1440, 1447)) {
            runScore = 29;
          } else if (totalRunTime.between(1446, 1453)) {
            runScore = 29;
          } else if (totalRunTime.between(1452, 1459)) {
            runScore = 28;
          } else if (totalRunTime.between(1458, 1465)) {
            runScore = 27;
          } else if (totalRunTime.between(1464, 1471)) {
            runScore = 26;
          } else if (totalRunTime.between(1470, 1477)) {
            runScore = 25;
          } else if (totalRunTime.between(1476, 1483)) {
            runScore = 24;
          } else if (totalRunTime.between(1482, 1489)) {
            runScore = 23;
          } else if (totalRunTime.between(1488, 1495)) {
            runScore = 23;
          } else if (totalRunTime.between(1494, 1501)) {
            runScore = 22;
          } else if (totalRunTime.between(1500, 1507)) {
            runScore = 21;
          } else if (totalRunTime.between(1506, 1513)) {
            runScore = 20;
          } else if (totalRunTime.between(1512, 1519)) {
            runScore = 19;
          } else if (totalRunTime.between(1518, 1525)) {
            runScore = 18;
          } else if (totalRunTime.between(1524, 1531)) {
            runScore = 17;
          } else if (totalRunTime.between(1530, 1537)) {
            runScore = 17;
          } else if (totalRunTime.between(1536, 1543)) {
            runScore = 16;
          } else if (totalRunTime.between(1542, 1549)) {
            runScore = 15;
          } else if (totalRunTime.between(1548, 1555)) {
            runScore = 14;
          } else if (totalRunTime.between(1554, 1561)) {
            runScore = 13;
          } else if (totalRunTime.between(1560, 1567)) {
            runScore = 12;
          } else if (totalRunTime.between(1566, 1573)) {
            runScore = 11;
          } else if (totalRunTime.between(1572, 1579)) {
            runScore = 11;
          } else if (totalRunTime.between(1578, 1585)) {
            runScore = 10;
          } else if (totalRunTime.between(1584, 1591)) {
            runScore = 9;
          } else if (totalRunTime > 1590) {
            runScore = 0;
          }
        } //close female 27 - 31 age range

        if (age >= 32 && age <= 36) {
          console.log('age range is between 32 and 36');
          //calculate pushup score female 32-36
          if (puCount >= 45) {
            puScore = 100;
          } else if (puCount == 44) {
            puScore = 99;
          } else if (puCount == 43) {
            puScore = 97;
          } else if (puCount == 42) {
            puScore = 96;
          } else if (puCount == 41) {
            puScore = 95;
          } else if (puCount == 40) {
            puScore = 93;
          } else if (puCount == 39) {
            puScore = 92;
          } else if (puCount == 38) {
            puScore = 91;
          } else if (puCount == 37) {
            puScore = 89;
          } else if (puCount == 36) {
            puScore = 88;
          } else if (puCount == 35) {
            puScore = 87;
          } else if (puCount == 34) {
            puScore = 85;
          } else if (puCount == 33) {
            puScore = 84;
          } else if (puCount == 32) {
            puScore = 83;
          } else if (puCount == 31) {
            puScore = 81;
          } else if (puCount == 30) {
            puScore = 80;
          } else if (puCount == 29) {
            puScore = 79;
          } else if (puCount == 28) {
            puScore = 77;
          } else if (puCount == 27) {
            puScore = 76;
          } else if (puCount == 26) {
            puScore = 75;
          } else if (puCount == 25) {
            puScore = 73;
          } else if (puCount == 24) {
            puScore = 72;
          } else if (puCount == 23) {
            puScore = 71;
          } else if (puCount == 22) {
            puScore = 69;
          } else if (puCount == 21) {
            puScore = 68;
          } else if (puCount == 20) {
            puScore = 67;
          } else if (puCount == 19) {
            puScore = 65;
          } else if (puCount == 18) {
            puScore = 64;
          } else if (puCount == 17) {
            puScore = 63;
          } else if (puCount == 16) {
            puScore = 61;
          } else if (puCount == 15) {
            puScore = 60;
          } else if (puCount == 14) {
            puScore = 59;
          } else if (puCount == 13) {
            puScore = 58;
          } else if (puCount == 12) {
            puScore = 56;
          } else if (puCount == 11) {
            puScore = 54;
          } else if (puCount == 10) {
            puScore = 52;
          } else if (puCount == 9) {
            puScore = 50;
          } else if (puCount == 8) {
            puScore = 49;
          } else if (puCount == 7) {
            puScore = 49;
          } else if (puCount == 6) {
            puScore = 48;
          } else if (puCount == 5) {
            puScore = 47;
          } else if (puCount == 4) {
            puScore = 45;
          } else if (puCount == 3) {
            puScore = 44;
          } else if (puCount == 2) {
            puScore = 43;
          } else if (puCount == 1) {
            puScore = 41;
          } else if (puCount == 0) {
            puScore = 0;
          }
          //calculate situp score female 32-36
          if (suCount >= 76) {
            suScore = 100;
          } else if (suCount == 75) {
            suScore = 99;
          } else if (suCount == 74) {
            suScore = 98;
          } else if (suCount == 73) {
            suScore = 96;
          } else if (suCount == 72) {
            suScore = 95;
          } else if (suCount == 71) {
            suScore = 94;
          } else if (suCount == 70) {
            suScore = 93;
          } else if (suCount == 69) {
            suScore = 92;
          } else if (suCount == 68) {
            suScore = 91;
          } else if (suCount == 67) {
            suScore = 89;
          } else if (suCount == 66) {
            suScore = 88;
          } else if (suCount == 65) {
            suScore = 87;
          } else if (suCount == 64) {
            suScore = 86;
          } else if (suCount == 63) {
            suScore = 85;
          } else if (suCount == 62) {
            suScore = 84;
          } else if (suCount == 61) {
            suScore = 82;
          } else if (suCount == 60) {
            suScore = 81;
          } else if (suCount == 59) {
            suScore = 80;
          } else if (suCount == 58) {
            suScore = 79;
          } else if (suCount == 57) {
            suScore = 78;
          } else if (suCount == 56) {
            suScore = 76;
          } else if (suCount == 55) {
            suScore = 75;
          } else if (suCount == 54) {
            suScore = 74;
          } else if (suCount == 53) {
            suScore = 73;
          } else if (suCount == 52) {
            suScore = 72;
          } else if (suCount == 51) {
            suScore = 71;
          } else if (suCount == 50) {
            suScore = 69;
          } else if (suCount == 49) {
            suScore = 68;
          } else if (suCount == 48) {
            suScore = 67;
          } else if (suCount == 47) {
            suScore = 66;
          } else if (suCount == 46) {
            suScore = 65;
          } else if (suCount == 45) {
            suScore = 64;
          } else if (suCount == 44) {
            suScore = 62;
          } else if (suCount == 43) {
            suScore = 61;
          } else if (suCount == 42) {
            suScore = 60;
          } else if (suCount == 41) {
            suScore = 59;
          } else if (suCount == 40) {
            suScore = 58;
          } else if (suCount == 39) {
            suScore = 56;
          } else if (suCount == 38) {
            suScore = 55;
          } else if (suCount == 37) {
            suScore = 54;
          } else if (suCount == 36) {
            suScore = 53;
          } else if (suCount == 35) {
            suScore = 52;
          } else if (suCount == 34) {
            suScore = 50;
          } else if (suCount == 33) {
            suScore = 49;
          } else if (suCount == 32) {
            suScore = 48;
          } else if (suCount == 31) {
            suScore = 47;
          } else if (suCount == 30) {
            suScore = 46;
          } else if (suCount == 29) {
            suScore = 45;
          } else if (suCount == 28) {
            suScore = 44;
          } else if (suCount == 27) {
            suScore = 42;
          } else if (suCount == 26) {
            suScore = 41;
          } else if (suCount == 25) {
            suScore = 40;
          } else if (suCount == 24) {
            suScore = 39;
          } else if (suCount == 23) {
            suScore = 38;
          } else if (suCount == 22) {
            suScore = 36;
          } else if (suCount == 21) {
            suScore = 35;
          } else if (suCount < 21) {
            suScore = 0;
          }
          //calculate run score female 32-36
          if (totalRunTime <= 954) {
            runScore = 100;
          } else if (totalRunTime.between(954, 961)) {
            runScore = 99;
          } else if (totalRunTime.between(960, 967)) {
            runScore = 99;
          } else if (totalRunTime.between(966, 973)) {
            runScore = 98;
          } else if (totalRunTime.between(972, 979)) {
            runScore = 97;
          } else if (totalRunTime.between(978, 985)) {
            runScore = 97;
          } else if (totalRunTime.between(984, 991)) {
            runScore = 96;
          } else if (totalRunTime.between(990, 997)) {
            runScore = 95;
          } else if (totalRunTime.between(996, 1003)) {
            runScore = 94;
          } else if (totalRunTime.between(1002, 1009)) {
            runScore = 94;
          } else if (totalRunTime.between(1008, 1015)) {
            runScore = 93;
          } else if (totalRunTime.between(1014, 1021)) {
            runScore = 92;
          } else if (totalRunTime.between(1020, 1027)) {
            runScore = 92;
          } else if (totalRunTime.between(1026, 1033)) {
            runScore = 91;
          } else if (totalRunTime.between(1032, 1039)) {
            runScore = 90;
          } else if (totalRunTime.between(1038, 1045)) {
            runScore = 90;
          } else if (totalRunTime.between(1044, 1051)) {
            runScore = 89;
          } else if (totalRunTime.between(1050, 1057)) {
            runScore = 88;
          } else if (totalRunTime.between(1056, 1063)) {
            runScore = 88;
          } else if (totalRunTime.between(1062, 1069)) {
            runScore = 87;
          } else if (totalRunTime.between(1068, 1075)) {
            runScore = 86;
          } else if (totalRunTime.between(1074, 1081)) {
            runScore = 86;
          } else if (totalRunTime.between(1080, 1087)) {
            runScore = 85;
          } else if (totalRunTime.between(1086, 1093)) {
            runScore = 84;
          } else if (totalRunTime.between(1092, 1099)) {
            runScore = 83;
          } else if (totalRunTime.between(1098, 1105)) {
            runScore = 83;
          } else if (totalRunTime.between(1104, 1111)) {
            runScore = 82;
          } else if (totalRunTime.between(1110, 1117)) {
            runScore = 81;
          } else if (totalRunTime.between(1116, 1123)) {
            runScore = 81;
          } else if (totalRunTime.between(1122, 1129)) {
            runScore = 80;
          } else if (totalRunTime.between(1128, 1135)) {
            runScore = 79;
          } else if (totalRunTime.between(1134, 1141)) {
            runScore = 79;
          } else if (totalRunTime.between(1140, 1147)) {
            runScore = 78;
          } else if (totalRunTime.between(1146, 1153)) {
            runScore = 77;
          } else if (totalRunTime.between(1152, 1159)) {
            runScore = 77;
          } else if (totalRunTime.between(1158, 1165)) {
            runScore = 76;
          } else if (totalRunTime.between(1164, 1171)) {
            runScore = 75;
          } else if (totalRunTime.between(1170, 1177)) {
            runScore = 74;
          } else if (totalRunTime.between(1176, 1183)) {
            runScore = 74;
          } else if (totalRunTime.between(1182, 1189)) {
            runScore = 73;
          } else if (totalRunTime.between(1188, 1195)) {
            runScore = 72;
          } else if (totalRunTime.between(1194, 1201)) {
            runScore = 72;
          } else if (totalRunTime.between(1200, 1207)) {
            runScore = 71;
          } else if (totalRunTime.between(1206, 1213)) {
            runScore = 70;
          } else if (totalRunTime.between(1212, 1219)) {
            runScore = 70;
          } else if (totalRunTime.between(1218, 1225)) {
            runScore = 69;
          } else if (totalRunTime.between(1224, 1231)) {
            runScore = 68;
          } else if (totalRunTime.between(1230, 1237)) {
            runScore = 68;
          } else if (totalRunTime.between(1236, 1243)) {
            runScore = 67;
          } else if (totalRunTime.between(1242, 1249)) {
            runScore = 66;
          } else if (totalRunTime.between(1248, 1255)) {
            runScore = 66;
          } else if (totalRunTime.between(1254, 1261)) {
            runScore = 65;
          } else if (totalRunTime.between(1260, 1267)) {
            runScore = 64;
          } else if (totalRunTime.between(1266, 1273)) {
            runScore = 63;
          } else if (totalRunTime.between(1272, 1279)) {
            runScore = 63;
          } else if (totalRunTime.between(1278, 1285)) {
            runScore = 62;
          } else if (totalRunTime.between(1284, 1291)) {
            runScore = 61;
          } else if (totalRunTime.between(1290, 1297)) {
            runScore = 61;
          } else if (totalRunTime.between(1296, 1303)) {
            runScore = 60;
          } else if (totalRunTime.between(1302, 1309)) {
            runScore = 59;
          } else if (totalRunTime.between(1308, 1315)) {
            runScore = 59;
          } else if (totalRunTime.between(1314, 1321)) {
            runScore = 58;
          } else if (totalRunTime.between(1320, 1327)) {
            runScore = 57;
          } else if (totalRunTime.between(1326, 1333)) {
            runScore = 57;
          } else if (totalRunTime.between(1332, 1339)) {
            runScore = 56;
          } else if (totalRunTime.between(1338, 1345)) {
            runScore = 55;
          } else if (totalRunTime.between(1344, 1351)) {
            runScore = 54;
          } else if (totalRunTime.between(1350, 1357)) {
            runScore = 54;
          } else if (totalRunTime.between(1356, 1363)) {
            runScore = 53;
          } else if (totalRunTime.between(1362, 1369)) {
            runScore = 52;
          } else if (totalRunTime.between(1368, 1375)) {
            runScore = 52;
          } else if (totalRunTime.between(1374, 1381)) {
            runScore = 51;
          } else if (totalRunTime.between(1380, 1387)) {
            runScore = 50;
          } else if (totalRunTime.between(1386, 1393)) {
            runScore = 49;
          } else if (totalRunTime.between(1392, 1399)) {
            runScore = 49;
          } else if (totalRunTime.between(1398, 1405)) {
            runScore = 48;
          } else if (totalRunTime.between(1404, 1411)) {
            runScore = 48;
          } else if (totalRunTime.between(1410, 1417)) {
            runScore = 47;
          } else if (totalRunTime.between(1416, 1423)) {
            runScore = 46;
          } else if (totalRunTime.between(1422, 1429)) {
            runScore = 46;
          } else if (totalRunTime.between(1428, 1435)) {
            runScore = 45;
          } else if (totalRunTime.between(1434, 1441)) {
            runScore = 44;
          } else if (totalRunTime.between(1440, 1447)) {
            runScore = 43;
          } else if (totalRunTime.between(1446, 1453)) {
            runScore = 43;
          } else if (totalRunTime.between(1452, 1459)) {
            runScore = 42;
          } else if (totalRunTime.between(1458, 1465)) {
            runScore = 41;
          } else if (totalRunTime.between(1464, 1471)) {
            runScore = 41;
          } else if (totalRunTime.between(1470, 1477)) {
            runScore = 40;
          } else if (totalRunTime.between(1476, 1483)) {
            runScore = 39;
          } else if (totalRunTime.between(1482, 1489)) {
            runScore = 39;
          } else if (totalRunTime.between(1488, 1495)) {
            runScore = 38;
          } else if (totalRunTime.between(1494, 1501)) {
            runScore = 37;
          } else if (totalRunTime.between(1500, 1507)) {
            runScore = 37;
          } else if (totalRunTime.between(1506, 1513)) {
            runScore = 36;
          } else if (totalRunTime.between(1512, 1519)) {
            runScore = 35;
          } else if (totalRunTime.between(1518, 1525)) {
            runScore = 34;
          } else if (totalRunTime.between(1524, 1531)) {
            runScore = 34;
          } else if (totalRunTime.between(1530, 1537)) {
            runScore = 33;
          } else if (totalRunTime.between(1536, 1543)) {
            runScore = 32;
          } else if (totalRunTime.between(1542, 1549)) {
            runScore = 32;
          } else if (totalRunTime.between(1548, 1555)) {
            runScore = 31;
          } else if (totalRunTime.between(1554, 1561)) {
            runScore = 30;
          } else if (totalRunTime.between(1560, 1567)) {
            runScore = 30;
          } else if (totalRunTime.between(1566, 1573)) {
            runScore = 29;
          } else if (totalRunTime.between(1572, 1579)) {
            runScore = 28;
          } else if (totalRunTime.between(1578, 1585)) {
            runScore = 28;
          } else if (totalRunTime.between(1584, 1591)) {
            runScore = 27;
          } else if (totalRunTime > 1590) {
            runScore = 0;
          }
        } //close female 32 - 36 age range

        if (age >= 37 && age <= 41) {
          console.log('age range is between 37 and 41');
          //calculate pushup score female 37-41
          if (puCount >= 40) {
            puScore = 100;
          } else if (puCount == 39) {
            puScore = 99;
          } else if (puCount == 38) {
            puScore = 97;
          } else if (puCount == 37) {
            puScore = 96;
          } else if (puCount == 36) {
            puScore = 94;
          } else if (puCount == 35) {
            puScore = 93;
          } else if (puCount == 34) {
            puScore = 91;
          } else if (puCount == 33) {
            puScore = 90;
          } else if (puCount == 32) {
            puScore = 88;
          } else if (puCount == 31) {
            puScore = 87;
          } else if (puCount == 30) {
            puScore = 85;
          } else if (puCount == 29) {
            puScore = 84;
          } else if (puCount == 28) {
            puScore = 82;
          } else if (puCount == 27) {
            puScore = 81;
          } else if (puCount == 26) {
            puScore = 79;
          } else if (puCount == 25) {
            puScore = 78;
          } else if (puCount == 24) {
            puScore = 76;
          } else if (puCount == 23) {
            puScore = 75;
          } else if (puCount == 22) {
            puScore = 73;
          } else if (puCount == 21) {
            puScore = 72;
          } else if (puCount == 20) {
            puScore = 70;
          } else if (puCount == 19) {
            puScore = 69;
          } else if (puCount == 18) {
            puScore = 67;
          } else if (puCount == 17) {
            puScore = 66;
          } else if (puCount == 16) {
            puScore = 64;
          } else if (puCount == 15) {
            puScore = 63;
          } else if (puCount == 14) {
            puScore = 61;
          } else if (puCount == 13) {
            puScore = 60;
          } else if (puCount == 12) {
            puScore = 59;
          } else if (puCount == 11) {
            puScore = 57;
          } else if (puCount == 10) {
            puScore = 56;
          } else if (puCount == 9) {
            puScore = 54;
          } else if (puCount == 8) {
            puScore = 53;
          } else if (puCount == 7) {
            puScore = 51;
          } else if (puCount == 6) {
            puScore = 50;
          } else if (puCount == 5) {
            puScore = 48;
          } else if (puCount == 4) {
            puScore = 47;
          } else if (puCount == 3) {
            puScore = 45;
          } else if (puCount == 2) {
            puScore = 44;
          } else if (puCount == 1) {
            puScore = 42;
          } else if (puCount == 0) {
            puScore = 0;
          }
          //calculate situp score female 37-41
          if (suCount >= 76) {
            suScore = 100;
          } else if (suCount == 75) {
            suScore = 99;
          } else if (suCount == 74) {
            suScore = 98;
          } else if (suCount == 73) {
            suScore = 97;
          } else if (suCount == 72) {
            suScore = 96;
          } else if (suCount == 71) {
            suScore = 95;
          } else if (suCount == 70) {
            suScore = 94;
          } else if (suCount == 69) {
            suScore = 93;
          } else if (suCount == 68) {
            suScore = 92;
          } else if (suCount == 67) {
            suScore = 91;
          } else if (suCount == 66) {
            suScore = 89;
          } else if (suCount == 65) {
            suScore = 88;
          } else if (suCount == 64) {
            suScore = 87;
          } else if (suCount == 63) {
            suScore = 86;
          } else if (suCount == 62) {
            suScore = 85;
          } else if (suCount == 61) {
            suScore = 84;
          } else if (suCount == 60) {
            suScore = 83;
          } else if (suCount == 59) {
            suScore = 82;
          } else if (suCount == 58) {
            suScore = 81;
          } else if (suCount == 57) {
            suScore = 80;
          } else if (suCount == 56) {
            suScore = 79;
          } else if (suCount == 55) {
            suScore = 78;
          } else if (suCount == 54) {
            suScore = 77;
          } else if (suCount == 53) {
            suScore = 76;
          } else if (suCount == 52) {
            suScore = 75;
          } else if (suCount == 51) {
            suScore = 74;
          } else if (suCount == 50) {
            suScore = 73;
          } else if (suCount == 49) {
            suScore = 72;
          } else if (suCount == 48) {
            suScore = 71;
          } else if (suCount == 47) {
            suScore = 69;
          } else if (suCount == 46) {
            suScore = 68;
          } else if (suCount == 45) {
            suScore = 67;
          } else if (suCount == 44) {
            suScore = 66;
          } else if (suCount == 43) {
            suScore = 65;
          } else if (suCount == 42) {
            suScore = 64;
          } else if (suCount == 41) {
            suScore = 63;
          } else if (suCount == 40) {
            suScore = 62;
          } else if (suCount == 39) {
            suScore = 61;
          } else if (suCount == 38) {
            suScore = 60;
          } else if (suCount == 37) {
            suScore = 59;
          } else if (suCount == 36) {
            suScore = 58;
          } else if (suCount == 35) {
            suScore = 57;
          } else if (suCount == 34) {
            suScore = 56;
          } else if (suCount == 33) {
            suScore = 55;
          } else if (suCount == 32) {
            suScore = 54;
          } else if (suCount == 31) {
            suScore = 53;
          } else if (suCount == 30) {
            suScore = 52;
          } else if (suCount == 29) {
            suScore = 50;
          } else if (suCount == 28) {
            suScore = 49;
          } else if (suCount == 27) {
            suScore = 48;
          } else if (suCount == 26) {
            suScore = 47;
          } else if (suCount == 25) {
            suScore = 46;
          } else if (suCount == 24) {
            suScore = 45;
          } else if (suCount == 23) {
            suScore = 44;
          } else if (suCount == 22) {
            suScore = 43;
          } else if (suCount == 21) {
            suScore = 42;
          } else if (suCount < 21) {
            suScore = 0;
          }
          //calculate run score female 37-41
          if (totalRunTime <= 1020) {
            runScore = 100;
          } else if (totalRunTime.between(1020, 1027)) {
            runScore = 99;
          } else if (totalRunTime.between(1026, 1033)) {
            runScore = 99;
          } else if (totalRunTime.between(1032, 1039)) {
            runScore = 98;
          } else if (totalRunTime.between(1038, 1045)) {
            runScore = 97;
          } else if (totalRunTime.between(1044, 1051)) {
            runScore = 96;
          } else if (totalRunTime.between(1050, 1057)) {
            runScore = 96;
          } else if (totalRunTime.between(1056, 1063)) {
            runScore = 95;
          } else if (totalRunTime.between(1062, 1069)) {
            runScore = 94;
          } else if (totalRunTime.between(1068, 1075)) {
            runScore = 94;
          } else if (totalRunTime.between(1074, 1081)) {
            runScore = 93;
          } else if (totalRunTime.between(1080, 1087)) {
            runScore = 92;
          } else if (totalRunTime.between(1086, 1093)) {
            runScore = 92;
          } else if (totalRunTime.between(1092, 1099)) {
            runScore = 91;
          } else if (totalRunTime.between(1098, 1105)) {
            runScore = 90;
          } else if (totalRunTime.between(1104, 1111)) {
            runScore = 89;
          } else if (totalRunTime.between(1110, 1117)) {
            runScore = 89;
          } else if (totalRunTime.between(1116, 1123)) {
            runScore = 88;
          } else if (totalRunTime.between(1122, 1129)) {
            runScore = 87;
          } else if (totalRunTime.between(1128, 1135)) {
            runScore = 87;
          } else if (totalRunTime.between(1134, 1141)) {
            runScore = 86;
          } else if (totalRunTime.between(1140, 1147)) {
            runScore = 85;
          } else if (totalRunTime.between(1146, 1153)) {
            runScore = 85;
          } else if (totalRunTime.between(1152, 1159)) {
            runScore = 84;
          } else if (totalRunTime.between(1158, 1165)) {
            runScore = 83;
          } else if (totalRunTime.between(1164, 1171)) {
            runScore = 82;
          } else if (totalRunTime.between(1170, 1177)) {
            runScore = 82;
          } else if (totalRunTime.between(1176, 1183)) {
            runScore = 81;
          } else if (totalRunTime.between(1182, 1189)) {
            runScore = 80;
          } else if (totalRunTime.between(1188, 1195)) {
            runScore = 80;
          } else if (totalRunTime.between(1194, 1201)) {
            runScore = 79;
          } else if (totalRunTime.between(1200, 1207)) {
            runScore = 78;
          } else if (totalRunTime.between(1206, 1213)) {
            runScore = 78;
          } else if (totalRunTime.between(1212, 1219)) {
            runScore = 77;
          } else if (totalRunTime.between(1218, 1225)) {
            runScore = 76;
          } else if (totalRunTime.between(1224, 1231)) {
            runScore = 75;
          } else if (totalRunTime.between(1230, 1237)) {
            runScore = 75;
          } else if (totalRunTime.between(1236, 1243)) {
            runScore = 74;
          } else if (totalRunTime.between(1242, 1249)) {
            runScore = 73;
          } else if (totalRunTime.between(1248, 1255)) {
            runScore = 73;
          } else if (totalRunTime.between(1254, 1261)) {
            runScore = 72;
          } else if (totalRunTime.between(1260, 1267)) {
            runScore = 71;
          } else if (totalRunTime.between(1266, 1273)) {
            runScore = 71;
          } else if (totalRunTime.between(1272, 1279)) {
            runScore = 70;
          } else if (totalRunTime.between(1278, 1285)) {
            runScore = 69;
          } else if (totalRunTime.between(1284, 1291)) {
            runScore = 68;
          } else if (totalRunTime.between(1290, 1297)) {
            runScore = 68;
          } else if (totalRunTime.between(1296, 1303)) {
            runScore = 67;
          } else if (totalRunTime.between(1302, 1309)) {
            runScore = 66;
          } else if (totalRunTime.between(1308, 1315)) {
            runScore = 66;
          } else if (totalRunTime.between(1314, 1321)) {
            runScore = 65;
          } else if (totalRunTime.between(1320, 1327)) {
            runScore = 64;
          } else if (totalRunTime.between(1326, 1333)) {
            runScore = 64;
          } else if (totalRunTime.between(1332, 1339)) {
            runScore = 63;
          } else if (totalRunTime.between(1338, 1345)) {
            runScore = 62;
          } else if (totalRunTime.between(1344, 1351)) {
            runScore = 61;
          } else if (totalRunTime.between(1350, 1357)) {
            runScore = 61;
          } else if (totalRunTime.between(1356, 1363)) {
            runScore = 60;
          } else if (totalRunTime.between(1362, 1369)) {
            runScore = 59;
          } else if (totalRunTime.between(1368, 1375)) {
            runScore = 59;
          } else if (totalRunTime.between(1374, 1381)) {
            runScore = 58;
          } else if (totalRunTime.between(1380, 1387)) {
            runScore = 57;
          } else if (totalRunTime.between(1386, 1393)) {
            runScore = 56;
          } else if (totalRunTime.between(1392, 1399)) {
            runScore = 56;
          } else if (totalRunTime.between(1398, 1405)) {
            runScore = 55;
          } else if (totalRunTime.between(1404, 1411)) {
            runScore = 54;
          } else if (totalRunTime.between(1410, 1417)) {
            runScore = 54;
          } else if (totalRunTime.between(1416, 1423)) {
            runScore = 53;
          } else if (totalRunTime.between(1422, 1429)) {
            runScore = 52;
          } else if (totalRunTime.between(1428, 1435)) {
            runScore = 52;
          } else if (totalRunTime.between(1434, 1441)) {
            runScore = 51;
          } else if (totalRunTime.between(1440, 1447)) {
            runScore = 50;
          } else if (totalRunTime.between(1446, 1453)) {
            runScore = 49;
          } else if (totalRunTime.between(1452, 1459)) {
            runScore = 49;
          } else if (totalRunTime.between(1458, 1465)) {
            runScore = 48;
          } else if (totalRunTime.between(1464, 1471)) {
            runScore = 47;
          } else if (totalRunTime.between(1470, 1477)) {
            runScore = 47;
          } else if (totalRunTime.between(1476, 1483)) {
            runScore = 46;
          } else if (totalRunTime.between(1482, 1489)) {
            runScore = 45;
          } else if (totalRunTime.between(1488, 1495)) {
            runScore = 45;
          } else if (totalRunTime.between(1494, 1501)) {
            runScore = 44;
          } else if (totalRunTime.between(1500, 1507)) {
            runScore = 43;
          } else if (totalRunTime.between(1506, 1513)) {
            runScore = 42;
          } else if (totalRunTime.between(1512, 1519)) {
            runScore = 42;
          } else if (totalRunTime.between(1518, 1525)) {
            runScore = 41;
          } else if (totalRunTime.between(1524, 1531)) {
            runScore = 40;
          } else if (totalRunTime.between(1530, 1537)) {
            runScore = 40;
          } else if (totalRunTime.between(1536, 1543)) {
            runScore = 39;
          } else if (totalRunTime.between(1542, 1549)) {
            runScore = 38;
          } else if (totalRunTime.between(1548, 1555)) {
            runScore = 38;
          } else if (totalRunTime.between(1554, 1561)) {
            runScore = 37;
          } else if (totalRunTime.between(1560, 1567)) {
            runScore = 36;
          } else if (totalRunTime.between(1566, 1573)) {
            runScore = 35;
          } else if (totalRunTime.between(1572, 1579)) {
            runScore = 35;
          } else if (totalRunTime.between(1578, 1585)) {
            runScore = 34;
          } else if (totalRunTime.between(1584, 1591)) {
            runScore = 33;
          } else if (totalRunTime > 1590) {
            runScore = 0;
          }
        } //close female 37 - 41 age range

        if (age >= 42 && age <= 46) {
          console.log('age range is between 42 and 46');
          //calculate pushup score female 42-46
          if (puCount >= 37) {
            puScore = 100;
          } else if (puCount == 36) {
            puScore = 98;
          } else if (puCount == 35) {
            puScore = 97;
          } else if (puCount == 34) {
            puScore = 95;
          } else if (puCount == 33) {
            puScore = 94;
          } else if (puCount == 32) {
            puScore = 92;
          } else if (puCount == 31) {
            puScore = 90;
          } else if (puCount == 30) {
            puScore = 89;
          } else if (puCount == 29) {
            puScore = 87;
          } else if (puCount == 28) {
            puScore = 86;
          } else if (puCount == 27) {
            puScore = 84;
          } else if (puCount == 26) {
            puScore = 82;
          } else if (puCount == 25) {
            puScore = 81;
          } else if (puCount == 24) {
            puScore = 79;
          } else if (puCount == 23) {
            puScore = 78;
          } else if (puCount == 22) {
            puScore = 76;
          } else if (puCount == 21) {
            puScore = 74;
          } else if (puCount == 20) {
            puScore = 73;
          } else if (puCount == 19) {
            puScore = 71;
          } else if (puCount == 18) {
            puScore = 70;
          } else if (puCount == 17) {
            puScore = 68;
          } else if (puCount == 16) {
            puScore = 66;
          } else if (puCount == 15) {
            puScore = 65;
          } else if (puCount == 14) {
            puScore = 63;
          } else if (puCount == 13) {
            puScore = 62;
          } else if (puCount == 12) {
            puScore = 60;
          } else if (puCount == 11) {
            puScore = 58;
          } else if (puCount == 10) {
            puScore = 57;
          } else if (puCount == 9) {
            puScore = 55;
          } else if (puCount == 8) {
            puScore = 54;
          } else if (puCount == 7) {
            puScore = 52;
          } else if (puCount == 6) {
            puScore = 50;
          } else if (puCount == 5) {
            puScore = 49;
          } else if (puCount < 5) {
            puScore = 0;
          }
          //calculate situp score female 42-46
          if (suCount >= 72) {
            suScore = 100;
          } else if (suCount == 71) {
            suScore = 99;
          } else if (suCount == 70) {
            suScore = 98;
          } else if (suCount == 69) {
            suScore = 97;
          } else if (suCount == 68) {
            suScore = 96;
          } else if (suCount == 67) {
            suScore = 95;
          } else if (suCount == 66) {
            suScore = 94;
          } else if (suCount == 65) {
            suScore = 93;
          } else if (suCount == 64) {
            suScore = 92;
          } else if (suCount == 63) {
            suScore = 91;
          } else if (suCount == 62) {
            suScore = 90;
          } else if (suCount == 61) {
            suScore = 89;
          } else if (suCount == 60) {
            suScore = 88;
          } else if (suCount == 59) {
            suScore = 87;
          } else if (suCount == 58) {
            suScore = 86;
          } else if (suCount == 57) {
            suScore = 85;
          } else if (suCount == 56) {
            suScore = 84;
          } else if (suCount == 55) {
            suScore = 83;
          } else if (suCount == 54) {
            suScore = 82;
          } else if (suCount == 53) {
            suScore = 81;
          } else if (suCount == 52) {
            suScore = 80;
          } else if (suCount == 51) {
            suScore = 79;
          } else if (suCount == 50) {
            suScore = 78;
          } else if (suCount == 49) {
            suScore = 77;
          } else if (suCount == 48) {
            suScore = 76;
          } else if (suCount == 47) {
            suScore = 75;
          } else if (suCount == 46) {
            suScore = 74;
          } else if (suCount == 45) {
            suScore = 73;
          } else if (suCount == 44) {
            suScore = 72;
          } else if (suCount == 43) {
            suScore = 71;
          } else if (suCount == 42) {
            suScore = 70;
          } else if (suCount == 41) {
            suScore = 69;
          } else if (suCount == 40) {
            suScore = 68;
          } else if (suCount == 39) {
            suScore = 67;
          } else if (suCount == 38) {
            suScore = 66;
          } else if (suCount == 37) {
            suScore = 65;
          } else if (suCount == 36) {
            suScore = 64;
          } else if (suCount == 35) {
            suScore = 63;
          } else if (suCount == 34) {
            suScore = 62;
          } else if (suCount == 33) {
            suScore = 61;
          } else if (suCount == 32) {
            suScore = 60;
          } else if (suCount == 31) {
            suScore = 59;
          } else if (suCount == 30) {
            suScore = 58;
          } else if (suCount == 29) {
            suScore = 57;
          } else if (suCount == 28) {
            suScore = 56;
          } else if (suCount == 27) {
            suScore = 55;
          } else if (suCount == 26) {
            suScore = 54;
          } else if (suCount == 25) {
            suScore = 53;
          } else if (suCount == 24) {
            suScore = 52;
          } else if (suCount == 23) {
            suScore = 51;
          } else if (suCount == 22) {
            suScore = 50;
          } else if (suCount == 21) {
            suScore = 49;
          } else if (suCount < 21) {
            suScore = 0;
          }
          //calculate run score female 42-46
          if (totalRunTime <= 1044) {
            runScore = 100;
          } else if (totalRunTime.between(1044, 1051)) {
            runScore = 99;
          } else if (totalRunTime.between(1050, 1057)) {
            runScore = 99;
          } else if (totalRunTime.between(1056, 1063)) {
            runScore = 98;
          } else if (totalRunTime.between(1062, 1069)) {
            runScore = 97;
          } else if (totalRunTime.between(1068, 1075)) {
            runScore = 97;
          } else if (totalRunTime.between(1074, 1081)) {
            runScore = 96;
          } else if (totalRunTime.between(1080, 1087)) {
            runScore = 96;
          } else if (totalRunTime.between(1086, 1093)) {
            runScore = 95;
          } else if (totalRunTime.between(1092, 1099)) {
            runScore = 94;
          } else if (totalRunTime.between(1098, 1105)) {
            runScore = 94;
          } else if (totalRunTime.between(1104, 1111)) {
            runScore = 93;
          } else if (totalRunTime.between(1110, 1117)) {
            runScore = 92;
          } else if (totalRunTime.between(1116, 1123)) {
            runScore = 92;
          } else if (totalRunTime.between(1122, 1129)) {
            runScore = 91;
          } else if (totalRunTime.between(1128, 1135)) {
            runScore = 90;
          } else if (totalRunTime.between(1134, 1141)) {
            runScore = 90;
          } else if (totalRunTime.between(1140, 1147)) {
            runScore = 89;
          } else if (totalRunTime.between(1146, 1153)) {
            runScore = 89;
          } else if (totalRunTime.between(1152, 1159)) {
            runScore = 88;
          } else if (totalRunTime.between(1158, 1165)) {
            runScore = 87;
          } else if (totalRunTime.between(1164, 1171)) {
            runScore = 87;
          } else if (totalRunTime.between(1170, 1177)) {
            runScore = 86;
          } else if (totalRunTime.between(1176, 1183)) {
            runScore = 85;
          } else if (totalRunTime.between(1182, 1189)) {
            runScore = 85;
          } else if (totalRunTime.between(1188, 1195)) {
            runScore = 84;
          } else if (totalRunTime.between(1194, 1201)) {
            runScore = 83;
          } else if (totalRunTime.between(1200, 1207)) {
            runScore = 83;
          } else if (totalRunTime.between(1206, 1213)) {
            runScore = 82;
          } else if (totalRunTime.between(1212, 1219)) {
            runScore = 82;
          } else if (totalRunTime.between(1218, 1225)) {
            runScore = 81;
          } else if (totalRunTime.between(1224, 1231)) {
            runScore = 80;
          } else if (totalRunTime.between(1230, 1237)) {
            runScore = 80;
          } else if (totalRunTime.between(1236, 1243)) {
            runScore = 79;
          } else if (totalRunTime.between(1242, 1249)) {
            runScore = 78;
          } else if (totalRunTime.between(1248, 1255)) {
            runScore = 78;
          } else if (totalRunTime.between(1254, 1261)) {
            runScore = 77;
          } else if (totalRunTime.between(1260, 1267)) {
            runScore = 77;
          } else if (totalRunTime.between(1266, 1273)) {
            runScore = 76;
          } else if (totalRunTime.between(1272, 1279)) {
            runScore = 75;
          } else if (totalRunTime.between(1278, 1285)) {
            runScore = 75;
          } else if (totalRunTime.between(1284, 1291)) {
            runScore = 74;
          } else if (totalRunTime.between(1290, 1297)) {
            runScore = 73;
          } else if (totalRunTime.between(1296, 1303)) {
            runScore = 73;
          } else if (totalRunTime.between(1302, 1309)) {
            runScore = 72;
          } else if (totalRunTime.between(1308, 1315)) {
            runScore = 71;
          } else if (totalRunTime.between(1314, 1321)) {
            runScore = 71;
          } else if (totalRunTime.between(1320, 1327)) {
            runScore = 70;
          } else if (totalRunTime.between(1326, 1333)) {
            runScore = 70;
          } else if (totalRunTime.between(1332, 1339)) {
            runScore = 69;
          } else if (totalRunTime.between(1338, 1345)) {
            runScore = 68;
          } else if (totalRunTime.between(1344, 1351)) {
            runScore = 68;
          } else if (totalRunTime.between(1350, 1357)) {
            runScore = 67;
          } else if (totalRunTime.between(1356, 1363)) {
            runScore = 66;
          } else if (totalRunTime.between(1362, 1369)) {
            runScore = 66;
          } else if (totalRunTime.between(1368, 1375)) {
            runScore = 65;
          } else if (totalRunTime.between(1374, 1381)) {
            runScore = 64;
          } else if (totalRunTime.between(1380, 1387)) {
            runScore = 64;
          } else if (totalRunTime.between(1386, 1393)) {
            runScore = 63;
          } else if (totalRunTime.between(1392, 1399)) {
            runScore = 63;
          } else if (totalRunTime.between(1398, 1405)) {
            runScore = 62;
          } else if (totalRunTime.between(1404, 1411)) {
            runScore = 61;
          } else if (totalRunTime.between(1410, 1417)) {
            runScore = 61;
          } else if (totalRunTime.between(1416, 1423)) {
            runScore = 60;
          } else if (totalRunTime.between(1422, 1429)) {
            runScore = 59;
          } else if (totalRunTime.between(1428, 1435)) {
            runScore = 59;
          } else if (totalRunTime.between(1434, 1441)) {
            runScore = 58;
          } else if (totalRunTime.between(1440, 1447)) {
            runScore = 57;
          } else if (totalRunTime.between(1446, 1453)) {
            runScore = 57;
          } else if (totalRunTime.between(1452, 1459)) {
            runScore = 56;
          } else if (totalRunTime.between(1458, 1465)) {
            runScore = 56;
          } else if (totalRunTime.between(1464, 1471)) {
            runScore = 55;
          } else if (totalRunTime.between(1470, 1477)) {
            runScore = 54;
          } else if (totalRunTime.between(1476, 1483)) {
            runScore = 54;
          } else if (totalRunTime.between(1482, 1489)) {
            runScore = 53;
          } else if (totalRunTime.between(1488, 1495)) {
            runScore = 52;
          } else if (totalRunTime.between(1494, 1501)) {
            runScore = 52;
          } else if (totalRunTime.between(1500, 1507)) {
            runScore = 51;
          } else if (totalRunTime.between(1506, 1513)) {
            runScore = 50;
          } else if (totalRunTime.between(1512, 1519)) {
            runScore = 50;
          } else if (totalRunTime.between(1518, 1525)) {
            runScore = 49;
          } else if (totalRunTime.between(1524, 1531)) {
            runScore = 49;
          } else if (totalRunTime.between(1530, 1537)) {
            runScore = 48;
          } else if (totalRunTime.between(1536, 1543)) {
            runScore = 47;
          } else if (totalRunTime.between(1542, 1549)) {
            runScore = 47;
          } else if (totalRunTime.between(1548, 1555)) {
            runScore = 46;
          } else if (totalRunTime.between(1554, 1561)) {
            runScore = 45;
          } else if (totalRunTime.between(1560, 1567)) {
            runScore = 45;
          } else if (totalRunTime.between(1566, 1573)) {
            runScore = 44;
          } else if (totalRunTime.between(1572, 1579)) {
            runScore = 43;
          } else if (totalRunTime.between(1578, 1585)) {
            runScore = 43;
          } else if (totalRunTime.between(1584, 1591)) {
            runScore = 42;
          } else if (totalRunTime > 1590) {
            runScore = 0;
          }
        } //close female 42 - 46 age range

        if (age >= 47 && age <= 51) {
          console.log('age range is between 47 and 51');
          //calculate pushup score female 47-51
          if (puCount >= 34) {
            puScore = 100;
          } else if (puCount == 33) {
            puScore = 98;
          } else if (puCount == 32) {
            puScore = 97;
          } else if (puCount == 31) {
            puScore = 95;
          } else if (puCount == 30) {
            puScore = 93;
          } else if (puCount == 29) {
            puScore = 92;
          } else if (puCount == 28) {
            puScore = 90;
          } else if (puCount == 27) {
            puScore = 88;
          } else if (puCount == 26) {
            puScore = 87;
          } else if (puCount == 25) {
            puScore = 85;
          } else if (puCount == 24) {
            puScore = 83;
          } else if (puCount == 23) {
            puScore = 82;
          } else if (puCount == 22) {
            puScore = 80;
          } else if (puCount == 21) {
            puScore = 78;
          } else if (puCount == 20) {
            puScore = 77;
          } else if (puCount == 19) {
            puScore = 75;
          } else if (puCount == 18) {
            puScore = 73;
          } else if (puCount == 17) {
            puScore = 72;
          } else if (puCount == 16) {
            puScore = 70;
          } else if (puCount == 15) {
            puScore = 68;
          } else if (puCount == 14) {
            puScore = 67;
          } else if (puCount == 13) {
            puScore = 65;
          } else if (puCount == 12) {
            puScore = 63;
          } else if (puCount == 11) {
            puScore = 62;
          } else if (puCount == 10) {
            puScore = 60;
          } else if (puCount == 9) {
            puScore = 58;
          } else if (puCount == 8) {
            puScore = 57;
          } else if (puCount == 7) {
            puScore = 55;
          } else if (puCount == 6) {
            puScore = 53;
          } else if (puCount == 5) {
            puScore = 52;
          } else if (puCount < 5) {
            puScore = 0;
          }
          //calculate situp score female 47-51
          if (suCount >= 66) {
            suScore = 100;
          } else if (suCount == 65) {
            suScore = 99;
          } else if (suCount == 64) {
            suScore = 98;
          } else if (suCount == 63) {
            suScore = 97;
          } else if (suCount == 62) {
            suScore = 96;
          } else if (suCount == 61) {
            suScore = 94;
          } else if (suCount == 60) {
            suScore = 93;
          } else if (suCount == 59) {
            suScore = 92;
          } else if (suCount == 58) {
            suScore = 91;
          } else if (suCount == 57) {
            suScore = 90;
          } else if (suCount == 56) {
            suScore = 89;
          } else if (suCount == 55) {
            suScore = 88;
          } else if (suCount == 54) {
            suScore = 87;
          } else if (suCount == 53) {
            suScore = 86;
          } else if (suCount == 52) {
            suScore = 84;
          } else if (suCount == 51) {
            suScore = 83;
          } else if (suCount == 50) {
            suScore = 82;
          } else if (suCount == 49) {
            suScore = 81;
          } else if (suCount == 48) {
            suScore = 80;
          } else if (suCount == 47) {
            suScore = 79;
          } else if (suCount == 46) {
            suScore = 78;
          } else if (suCount == 45) {
            suScore = 77;
          } else if (suCount == 44) {
            suScore = 76;
          } else if (suCount == 43) {
            suScore = 74;
          } else if (suCount == 42) {
            suScore = 73;
          } else if (suCount == 41) {
            suScore = 72;
          } else if (suCount == 40) {
            suScore = 71;
          } else if (suCount == 39) {
            suScore = 70;
          } else if (suCount == 38) {
            suScore = 69;
          } else if (suCount == 37) {
            suScore = 68;
          } else if (suCount == 36) {
            suScore = 67;
          } else if (suCount == 35) {
            suScore = 66;
          } else if (suCount == 34) {
            suScore = 64;
          } else if (suCount == 33) {
            suScore = 63;
          } else if (suCount == 32) {
            suScore = 62;
          } else if (suCount == 31) {
            suScore = 61;
          } else if (suCount == 30) {
            suScore = 60;
          } else if (suCount == 29) {
            suScore = 59;
          } else if (suCount == 28) {
            suScore = 58;
          } else if (suCount == 27) {
            suScore = 57;
          } else if (suCount == 26) {
            suScore = 56;
          } else if (suCount == 25) {
            suScore = 54;
          } else if (suCount == 24) {
            suScore = 53;
          } else if (suCount == 23) {
            suScore = 52;
          } else if (suCount == 22) {
            suScore = 51;
          } else if (suCount == 21) {
            suScore = 50;
          } else if (suCount < 21) {
            suScore = 0;
          }
          //calculate run score female 47-51
          if (totalRunTime <= 1056) {
            runScore = 100;
          } else if (totalRunTime.between(1056, 1063)) {
            runScore = 99;
          } else if (totalRunTime.between(1062, 1069)) {
            runScore = 99;
          } else if (totalRunTime.between(1068, 1075)) {
            runScore = 98;
          } else if (totalRunTime.between(1074, 1081)) {
            runScore = 97;
          } else if (totalRunTime.between(1080, 1087)) {
            runScore = 97;
          } else if (totalRunTime.between(1086, 1093)) {
            runScore = 96;
          } else if (totalRunTime.between(1092, 1099)) {
            runScore = 96;
          } else if (totalRunTime.between(1098, 1105)) {
            runScore = 95;
          } else if (totalRunTime.between(1104, 1111)) {
            runScore = 94;
          } else if (totalRunTime.between(1110, 1117)) {
            runScore = 94;
          } else if (totalRunTime.between(1116, 1123)) {
            runScore = 93;
          } else if (totalRunTime.between(1122, 1129)) {
            runScore = 92;
          } else if (totalRunTime.between(1128, 1135)) {
            runScore = 92;
          } else if (totalRunTime.between(1134, 1141)) {
            runScore = 91;
          } else if (totalRunTime.between(1140, 1147)) {
            runScore = 91;
          } else if (totalRunTime.between(1146, 1153)) {
            runScore = 90;
          } else if (totalRunTime.between(1152, 1159)) {
            runScore = 89;
          } else if (totalRunTime.between(1158, 1165)) {
            runScore = 89;
          } else if (totalRunTime.between(1164, 1171)) {
            runScore = 88;
          } else if (totalRunTime.between(1170, 1177)) {
            runScore = 87;
          } else if (totalRunTime.between(1176, 1183)) {
            runScore = 87;
          } else if (totalRunTime.between(1182, 1189)) {
            runScore = 86;
          } else if (totalRunTime.between(1188, 1195)) {
            runScore = 86;
          } else if (totalRunTime.between(1194, 1201)) {
            runScore = 85;
          } else if (totalRunTime.between(1200, 1207)) {
            runScore = 84;
          } else if (totalRunTime.between(1206, 1213)) {
            runScore = 84;
          } else if (totalRunTime.between(1212, 1219)) {
            runScore = 83;
          } else if (totalRunTime.between(1218, 1225)) {
            runScore = 82;
          } else if (totalRunTime.between(1224, 1231)) {
            runScore = 82;
          } else if (totalRunTime.between(1230, 1237)) {
            runScore = 81;
          } else if (totalRunTime.between(1236, 1243)) {
            runScore = 81;
          } else if (totalRunTime.between(1242, 1249)) {
            runScore = 80;
          } else if (totalRunTime.between(1248, 1255)) {
            runScore = 79;
          } else if (totalRunTime.between(1254, 1261)) {
            runScore = 79;
          } else if (totalRunTime.between(1260, 1267)) {
            runScore = 78;
          } else if (totalRunTime.between(1266, 1273)) {
            runScore = 77;
          } else if (totalRunTime.between(1272, 1279)) {
            runScore = 77;
          } else if (totalRunTime.between(1278, 1285)) {
            runScore = 76;
          } else if (totalRunTime.between(1284, 1291)) {
            runScore = 76;
          } else if (totalRunTime.between(1290, 1297)) {
            runScore = 75;
          } else if (totalRunTime.between(1296, 1303)) {
            runScore = 74;
          } else if (totalRunTime.between(1302, 1309)) {
            runScore = 74;
          } else if (totalRunTime.between(1308, 1315)) {
            runScore = 73;
          } else if (totalRunTime.between(1314, 1321)) {
            runScore = 72;
          } else if (totalRunTime.between(1320, 1327)) {
            runScore = 72;
          } else if (totalRunTime.between(1326, 1333)) {
            runScore = 71;
          } else if (totalRunTime.between(1332, 1339)) {
            runScore = 71;
          } else if (totalRunTime.between(1338, 1345)) {
            runScore = 70;
          } else if (totalRunTime.between(1344, 1351)) {
            runScore = 69;
          } else if (totalRunTime.between(1350, 1357)) {
            runScore = 69;
          } else if (totalRunTime.between(1356, 1363)) {
            runScore = 68;
          } else if (totalRunTime.between(1362, 1369)) {
            runScore = 67;
          } else if (totalRunTime.between(1368, 1375)) {
            runScore = 67;
          } else if (totalRunTime.between(1374, 1381)) {
            runScore = 66;
          } else if (totalRunTime.between(1380, 1387)) {
            runScore = 66;
          } else if (totalRunTime.between(1386, 1393)) {
            runScore = 65;
          } else if (totalRunTime.between(1392, 1399)) {
            runScore = 64;
          } else if (totalRunTime.between(1398, 1405)) {
            runScore = 64;
          } else if (totalRunTime.between(1404, 1411)) {
            runScore = 63;
          } else if (totalRunTime.between(1410, 1417)) {
            runScore = 62;
          } else if (totalRunTime.between(1416, 1423)) {
            runScore = 62;
          } else if (totalRunTime.between(1422, 1429)) {
            runScore = 61;
          } else if (totalRunTime.between(1428, 1435)) {
            runScore = 61;
          } else if (totalRunTime.between(1434, 1441)) {
            runScore = 60;
          } else if (totalRunTime.between(1440, 1447)) {
            runScore = 59;
          } else if (totalRunTime.between(1446, 1453)) {
            runScore = 59;
          } else if (totalRunTime.between(1452, 1459)) {
            runScore = 58;
          } else if (totalRunTime.between(1458, 1465)) {
            runScore = 57;
          } else if (totalRunTime.between(1464, 1471)) {
            runScore = 57;
          } else if (totalRunTime.between(1470, 1477)) {
            runScore = 56;
          } else if (totalRunTime.between(1476, 1483)) {
            runScore = 56;
          } else if (totalRunTime.between(1482, 1489)) {
            runScore = 55;
          } else if (totalRunTime.between(1488, 1495)) {
            runScore = 54;
          } else if (totalRunTime.between(1494, 1501)) {
            runScore = 54;
          } else if (totalRunTime.between(1500, 1507)) {
            runScore = 53;
          } else if (totalRunTime.between(1506, 1513)) {
            runScore = 52;
          } else if (totalRunTime.between(1512, 1519)) {
            runScore = 52;
          } else if (totalRunTime.between(1518, 1525)) {
            runScore = 51;
          } else if (totalRunTime.between(1524, 1531)) {
            runScore = 51;
          } else if (totalRunTime.between(1530, 1537)) {
            runScore = 50;
          } else if (totalRunTime.between(1536, 1543)) {
            runScore = 49;
          } else if (totalRunTime.between(1542, 1549)) {
            runScore = 49;
          } else if (totalRunTime.between(1548, 1555)) {
            runScore = 48;
          } else if (totalRunTime.between(1554, 1561)) {
            runScore = 47;
          } else if (totalRunTime.between(1560, 1567)) {
            runScore = 47;
          } else if (totalRunTime.between(1566, 1573)) {
            runScore = 46;
          } else if (totalRunTime.between(1572, 1579)) {
            runScore = 46;
          } else if (totalRunTime.between(1578, 1585)) {
            runScore = 45;
          } else if (totalRunTime.between(1584, 1591)) {
            runScore = 44;
          } else if (totalRunTime > 1590) {
            runScore = 0;
          }
        } //close female 47 - 51 age range

        if (age >= 52 && age <= 56) {
          console.log('age range is between 52 and 56');
          //calculate pushup score female 52-56
          if (puCount >= 31) {
            puScore = 100;
          } else if (puCount == 30) {
            puScore = 98;
          } else if (puCount == 29) {
            puScore = 96;
          } else if (puCount == 28) {
            puScore = 95;
          } else if (puCount == 27) {
            puScore = 93;
          } else if (puCount == 26) {
            puScore = 91;
          } else if (puCount == 25) {
            puScore = 89;
          } else if (puCount == 24) {
            puScore = 87;
          } else if (puCount == 23) {
            puScore = 85;
          } else if (puCount == 22) {
            puScore = 84;
          } else if (puCount == 21) {
            puScore = 82;
          } else if (puCount == 20) {
            puScore = 80;
          } else if (puCount == 19) {
            puScore = 78;
          } else if (puCount == 18) {
            puScore = 76;
          } else if (puCount == 17) {
            puScore = 75;
          } else if (puCount == 16) {
            puScore = 73;
          } else if (puCount == 15) {
            puScore = 71;
          } else if (puCount == 14) {
            puScore = 69;
          } else if (puCount == 13) {
            puScore = 67;
          } else if (puCount == 12) {
            puScore = 65;
          } else if (puCount == 11) {
            puScore = 64;
          } else if (puCount == 10) {
            puScore = 62;
          } else if (puCount == 9) {
            puScore = 60;
          } else if (puCount == 8) {
            puScore = 58;
          } else if (puCount == 7) {
            puScore = 56;
          } else if (puCount == 6) {
            puScore = 55;
          } else if (puCount == 5) {
            puScore = 53;
          } else if (puCount < 5) {
            puScore = 0;
          }
          //calculate situp score female 52-56
          if (suCount >= 66) {
            suScore = 100;
          } else if (suCount == 65) {
            suScore = 99;
          } else if (suCount == 64) {
            suScore = 98;
          } else if (suCount == 63) {
            suScore = 97;
          } else if (suCount == 62) {
            suScore = 96;
          } else if (suCount == 61) {
            suScore = 95;
          } else if (suCount == 60) {
            suScore = 94;
          } else if (suCount == 59) {
            suScore = 93;
          } else if (suCount == 58) {
            suScore = 92;
          } else if (suCount == 57) {
            suScore = 91;
          } else if (suCount == 56) {
            suScore = 89;
          } else if (suCount == 55) {
            suScore = 88;
          } else if (suCount == 54) {
            suScore = 87;
          } else if (suCount == 53) {
            suScore = 86;
          } else if (suCount == 52) {
            suScore = 85;
          } else if (suCount == 51) {
            suScore = 84;
          } else if (suCount == 50) {
            suScore = 83;
          } else if (suCount == 49) {
            suScore = 82;
          } else if (suCount == 48) {
            suScore = 81;
          } else if (suCount == 47) {
            suScore = 80;
          } else if (suCount == 46) {
            suScore = 79;
          } else if (suCount == 45) {
            suScore = 78;
          } else if (suCount == 44) {
            suScore = 77;
          } else if (suCount == 43) {
            suScore = 76;
          } else if (suCount == 42) {
            suScore = 75;
          } else if (suCount == 41) {
            suScore = 74;
          } else if (suCount == 40) {
            suScore = 73;
          } else if (suCount == 39) {
            suScore = 72;
          } else if (suCount == 38) {
            suScore = 71;
          } else if (suCount == 37) {
            suScore = 69;
          } else if (suCount == 36) {
            suScore = 68;
          } else if (suCount == 35) {
            suScore = 67;
          } else if (suCount == 34) {
            suScore = 66;
          } else if (suCount == 33) {
            suScore = 65;
          } else if (suCount == 32) {
            suScore = 64;
          } else if (suCount == 31) {
            suScore = 63;
          } else if (suCount == 30) {
            suScore = 62;
          } else if (suCount == 29) {
            suScore = 61;
          } else if (suCount == 28) {
            suScore = 60;
          } else if (suCount == 27) {
            suScore = 59;
          } else if (suCount == 26) {
            suScore = 58;
          } else if (suCount == 25) {
            suScore = 57;
          } else if (suCount == 24) {
            suScore = 56;
          } else if (suCount == 23) {
            suScore = 55;
          } else if (suCount == 22) {
            suScore = 54;
          } else if (suCount == 21) {
            suScore = 53;
          } else if (suCount < 21) {
            suScore = 0;
          }
          //calculate run score female 52-56
          if (totalRunTime <= 1140) {
            runScore = 100;
          } else if (totalRunTime.between(1140, 1147)) {
            runScore = 99;
          } else if (totalRunTime.between(1146, 1153)) {
            runScore = 99;
          } else if (totalRunTime.between(1152, 1159)) {
            runScore = 98;
          } else if (totalRunTime.between(1158, 1165)) {
            runScore = 97;
          } else if (totalRunTime.between(1164, 1171)) {
            runScore = 96;
          } else if (totalRunTime.between(1170, 1177)) {
            runScore = 96;
          } else if (totalRunTime.between(1176, 1183)) {
            runScore = 95;
          } else if (totalRunTime.between(1182, 1189)) {
            runScore = 94;
          } else if (totalRunTime.between(1188, 1195)) {
            runScore = 93;
          } else if (totalRunTime.between(1194, 1201)) {
            runScore = 93;
          } else if (totalRunTime.between(1200, 1207)) {
            runScore = 92;
          } else if (totalRunTime.between(1206, 1213)) {
            runScore = 91;
          } else if (totalRunTime.between(1212, 1219)) {
            runScore = 90;
          } else if (totalRunTime.between(1218, 1225)) {
            runScore = 90;
          } else if (totalRunTime.between(1224, 1231)) {
            runScore = 89;
          } else if (totalRunTime.between(1230, 1237)) {
            runScore = 88;
          } else if (totalRunTime.between(1236, 1243)) {
            runScore = 87;
          } else if (totalRunTime.between(1242, 1249)) {
            runScore = 87;
          } else if (totalRunTime.between(1248, 1255)) {
            runScore = 86;
          } else if (totalRunTime.between(1254, 1261)) {
            runScore = 85;
          } else if (totalRunTime.between(1260, 1267)) {
            runScore = 84;
          } else if (totalRunTime.between(1266, 1273)) {
            runScore = 84;
          } else if (totalRunTime.between(1272, 1279)) {
            runScore = 83;
          } else if (totalRunTime.between(1278, 1285)) {
            runScore = 82;
          } else if (totalRunTime.between(1284, 1291)) {
            runScore = 81;
          } else if (totalRunTime.between(1290, 1297)) {
            runScore = 81;
          } else if (totalRunTime.between(1296, 1303)) {
            runScore = 80;
          } else if (totalRunTime.between(1302, 1309)) {
            runScore = 79;
          } else if (totalRunTime.between(1308, 1315)) {
            runScore = 79;
          } else if (totalRunTime.between(1314, 1321)) {
            runScore = 78;
          } else if (totalRunTime.between(1320, 1327)) {
            runScore = 77;
          } else if (totalRunTime.between(1326, 1333)) {
            runScore = 76;
          } else if (totalRunTime.between(1332, 1339)) {
            runScore = 76;
          } else if (totalRunTime.between(1338, 1345)) {
            runScore = 75;
          } else if (totalRunTime.between(1344, 1351)) {
            runScore = 74;
          } else if (totalRunTime.between(1350, 1357)) {
            runScore = 73;
          } else if (totalRunTime.between(1356, 1363)) {
            runScore = 73;
          } else if (totalRunTime.between(1362, 1369)) {
            runScore = 72;
          } else if (totalRunTime.between(1368, 1375)) {
            runScore = 71;
          } else if (totalRunTime.between(1374, 1381)) {
            runScore = 70;
          } else if (totalRunTime.between(1380, 1387)) {
            runScore = 70;
          } else if (totalRunTime.between(1386, 1393)) {
            runScore = 69;
          } else if (totalRunTime.between(1392, 1399)) {
            runScore = 68;
          } else if (totalRunTime.between(1398, 1405)) {
            runScore = 67;
          } else if (totalRunTime.between(1404, 1411)) {
            runScore = 67;
          } else if (totalRunTime.between(1410, 1417)) {
            runScore = 66;
          } else if (totalRunTime.between(1416, 1423)) {
            runScore = 65;
          } else if (totalRunTime.between(1422, 1429)) {
            runScore = 64;
          } else if (totalRunTime.between(1428, 1435)) {
            runScore = 64;
          } else if (totalRunTime.between(1434, 1441)) {
            runScore = 63;
          } else if (totalRunTime.between(1440, 1447)) {
            runScore = 62;
          } else if (totalRunTime.between(1446, 1453)) {
            runScore = 61;
          } else if (totalRunTime.between(1452, 1459)) {
            runScore = 61;
          } else if (totalRunTime.between(1458, 1465)) {
            runScore = 60;
          } else if (totalRunTime.between(1464, 1471)) {
            runScore = 59;
          } else if (totalRunTime.between(1470, 1477)) {
            runScore = 59;
          } else if (totalRunTime.between(1476, 1483)) {
            runScore = 58;
          } else if (totalRunTime.between(1482, 1489)) {
            runScore = 57;
          } else if (totalRunTime.between(1488, 1495)) {
            runScore = 56;
          } else if (totalRunTime.between(1494, 1501)) {
            runScore = 56;
          } else if (totalRunTime.between(1500, 1507)) {
            runScore = 55;
          } else if (totalRunTime.between(1506, 1513)) {
            runScore = 54;
          } else if (totalRunTime.between(1512, 1519)) {
            runScore = 53;
          } else if (totalRunTime.between(1518, 1525)) {
            runScore = 53;
          } else if (totalRunTime.between(1524, 1531)) {
            runScore = 52;
          } else if (totalRunTime.between(1530, 1537)) {
            runScore = 51;
          } else if (totalRunTime.between(1536, 1543)) {
            runScore = 50;
          } else if (totalRunTime.between(1542, 1549)) {
            runScore = 50;
          } else if (totalRunTime.between(1548, 1555)) {
            runScore = 49;
          } else if (totalRunTime.between(1554, 1561)) {
            runScore = 48;
          } else if (totalRunTime.between(1560, 1567)) {
            runScore = 47;
          } else if (totalRunTime.between(1566, 1573)) {
            runScore = 47;
          } else if (totalRunTime.between(1572, 1579)) {
            runScore = 46;
          } else if (totalRunTime.between(1578, 1585)) {
            runScore = 45;
          } else if (totalRunTime.between(1584, 1591)) {
            runScore = 44;
          } else if (totalRunTime > 1590) {
            runScore = 0;
          }
        } //close female 52 - 56 age range

        if (age >= 57 && age <= 61) {
          console.log('age range is between 57 and 61');
          //calculate pushup score female 57-61
          if (puCount >= 28) {
            puScore = 100;
          } else if (puCount == 27) {
            puScore = 98;
          } else if (puCount == 26) {
            puScore = 96;
          } else if (puCount == 25) {
            puScore = 94;
          } else if (puCount == 24) {
            puScore = 92;
          } else if (puCount == 23) {
            puScore = 90;
          } else if (puCount == 22) {
            puScore = 88;
          } else if (puCount == 21) {
            puScore = 86;
          } else if (puCount == 20) {
            puScore = 84;
          } else if (puCount == 19) {
            puScore = 82;
          } else if (puCount == 18) {
            puScore = 80;
          } else if (puCount == 17) {
            puScore = 78;
          } else if (puCount == 16) {
            puScore = 76;
          } else if (puCount == 15) {
            puScore = 74;
          } else if (puCount == 14) {
            puScore = 72;
          } else if (puCount == 13) {
            puScore = 70;
          } else if (puCount == 12) {
            puScore = 68;
          } else if (puCount == 11) {
            puScore = 66;
          } else if (puCount == 10) {
            puScore = 64;
          } else if (puCount == 9) {
            puScore = 62;
          } else if (puCount == 8) {
            puScore = 60;
          } else if (puCount == 7) {
            puScore = 58;
          } else if (puCount == 6) {
            puScore = 56;
          } else if (puCount == 5) {
            puScore = 54;
          } else if (puCount < 5) {
            puScore = 0;
          }
          //calculate situp score female 57-61
          if (suCount >= 64) {
            suScore = 100;
          } else if (suCount == 63) {
            suScore = 99;
          } else if (suCount == 62) {
            suScore = 98;
          } else if (suCount == 61) {
            suScore = 97;
          } else if (suCount == 60) {
            suScore = 96;
          } else if (suCount == 59) {
            suScore = 95;
          } else if (suCount == 58) {
            suScore = 94;
          } else if (suCount == 57) {
            suScore = 92;
          } else if (suCount == 56) {
            suScore = 91;
          } else if (suCount == 55) {
            suScore = 90;
          } else if (suCount == 54) {
            suScore = 89;
          } else if (suCount == 53) {
            suScore = 88;
          } else if (suCount == 52) {
            suScore = 87;
          } else if (suCount == 51) {
            suScore = 86;
          } else if (suCount == 50) {
            suScore = 85;
          } else if (suCount == 49) {
            suScore = 84;
          } else if (suCount == 48) {
            suScore = 83;
          } else if (suCount == 47) {
            suScore = 82;
          } else if (suCount == 46) {
            suScore = 81;
          } else if (suCount == 45) {
            suScore = 79;
          } else if (suCount == 44) {
            suScore = 78;
          } else if (suCount == 43) {
            suScore = 77;
          } else if (suCount == 42) {
            suScore = 76;
          } else if (suCount == 41) {
            suScore = 75;
          } else if (suCount == 40) {
            suScore = 74;
          } else if (suCount == 39) {
            suScore = 73;
          } else if (suCount == 38) {
            suScore = 72;
          } else if (suCount == 37) {
            suScore = 71;
          } else if (suCount == 36) {
            suScore = 70;
          } else if (suCount == 35) {
            suScore = 69;
          } else if (suCount == 34) {
            suScore = 68;
          } else if (suCount == 33) {
            suScore = 66;
          } else if (suCount == 32) {
            suScore = 65;
          } else if (suCount == 31) {
            suScore = 64;
          } else if (suCount == 30) {
            suScore = 63;
          } else if (suCount == 29) {
            suScore = 62;
          } else if (suCount == 28) {
            suScore = 61;
          } else if (suCount == 27) {
            suScore = 60;
          } else if (suCount == 26) {
            suScore = 59;
          } else if (suCount == 25) {
            suScore = 58;
          } else if (suCount == 24) {
            suScore = 57;
          } else if (suCount == 23) {
            suScore = 56;
          } else if (suCount == 22) {
            suScore = 55;
          } else if (suCount == 21) {
            suScore = 54;
          } else if (suCount < 21) {
            suScore = 0;
          }
          //calculate run score female 57-61
          if (totalRunTime <= 1182) {
            runScore = 100;
          } else if (totalRunTime.between(1182, 1189)) {
            runScore = 99;
          } else if (totalRunTime.between(1188, 1195)) {
            runScore = 98;
          } else if (totalRunTime.between(1194, 1201)) {
            runScore = 98;
          } else if (totalRunTime.between(1200, 1207)) {
            runScore = 97;
          } else if (totalRunTime.between(1206, 1213)) {
            runScore = 96;
          } else if (totalRunTime.between(1212, 1219)) {
            runScore = 95;
          } else if (totalRunTime.between(1218, 1225)) {
            runScore = 95;
          } else if (totalRunTime.between(1224, 1231)) {
            runScore = 94;
          } else if (totalRunTime.between(1230, 1237)) {
            runScore = 93;
          } else if (totalRunTime.between(1236, 1243)) {
            runScore = 92;
          } else if (totalRunTime.between(1242, 1249)) {
            runScore = 91;
          } else if (totalRunTime.between(1248, 1255)) {
            runScore = 91;
          } else if (totalRunTime.between(1254, 1261)) {
            runScore = 90;
          } else if (totalRunTime.between(1260, 1267)) {
            runScore = 89;
          } else if (totalRunTime.between(1266, 1273)) {
            runScore = 88;
          } else if (totalRunTime.between(1272, 1279)) {
            runScore = 87;
          } else if (totalRunTime.between(1278, 1285)) {
            runScore = 87;
          } else if (totalRunTime.between(1284, 1291)) {
            runScore = 86;
          } else if (totalRunTime.between(1290, 1297)) {
            runScore = 85;
          } else if (totalRunTime.between(1296, 1303)) {
            runScore = 84;
          } else if (totalRunTime.between(1302, 1309)) {
            runScore = 84;
          } else if (totalRunTime.between(1308, 1315)) {
            runScore = 83;
          } else if (totalRunTime.between(1314, 1321)) {
            runScore = 82;
          } else if (totalRunTime.between(1320, 1327)) {
            runScore = 81;
          } else if (totalRunTime.between(1326, 1333)) {
            runScore = 80;
          } else if (totalRunTime.between(1332, 1339)) {
            runScore = 80;
          } else if (totalRunTime.between(1338, 1345)) {
            runScore = 79;
          } else if (totalRunTime.between(1344, 1351)) {
            runScore = 78;
          } else if (totalRunTime.between(1350, 1357)) {
            runScore = 77;
          } else if (totalRunTime.between(1356, 1363)) {
            runScore = 76;
          } else if (totalRunTime.between(1362, 1369)) {
            runScore = 76;
          } else if (totalRunTime.between(1368, 1375)) {
            runScore = 75;
          } else if (totalRunTime.between(1374, 1381)) {
            runScore = 74;
          } else if (totalRunTime.between(1380, 1387)) {
            runScore = 73;
          } else if (totalRunTime.between(1386, 1393)) {
            runScore = 73;
          } else if (totalRunTime.between(1392, 1399)) {
            runScore = 72;
          } else if (totalRunTime.between(1398, 1405)) {
            runScore = 71;
          } else if (totalRunTime.between(1404, 1411)) {
            runScore = 70;
          } else if (totalRunTime.between(1410, 1417)) {
            runScore = 69;
          } else if (totalRunTime.between(1416, 1423)) {
            runScore = 69;
          } else if (totalRunTime.between(1422, 1429)) {
            runScore = 68;
          } else if (totalRunTime.between(1428, 1435)) {
            runScore = 67;
          } else if (totalRunTime.between(1434, 1441)) {
            runScore = 66;
          } else if (totalRunTime.between(1440, 1447)) {
            runScore = 65;
          } else if (totalRunTime.between(1446, 1453)) {
            runScore = 65;
          } else if (totalRunTime.between(1452, 1459)) {
            runScore = 64;
          } else if (totalRunTime.between(1458, 1465)) {
            runScore = 63;
          } else if (totalRunTime.between(1464, 1471)) {
            runScore = 62;
          } else if (totalRunTime.between(1470, 1477)) {
            runScore = 62;
          } else if (totalRunTime.between(1476, 1483)) {
            runScore = 61;
          } else if (totalRunTime.between(1482, 1489)) {
            runScore = 60;
          } else if (totalRunTime.between(1488, 1495)) {
            runScore = 59;
          } else if (totalRunTime.between(1494, 1501)) {
            runScore = 58;
          } else if (totalRunTime.between(1500, 1507)) {
            runScore = 58;
          } else if (totalRunTime.between(1506, 1513)) {
            runScore = 57;
          } else if (totalRunTime.between(1512, 1519)) {
            runScore = 56;
          } else if (totalRunTime.between(1518, 1525)) {
            runScore = 55;
          } else if (totalRunTime.between(1524, 1531)) {
            runScore = 55;
          } else if (totalRunTime.between(1530, 1537)) {
            runScore = 54;
          } else if (totalRunTime.between(1536, 1543)) {
            runScore = 53;
          } else if (totalRunTime.between(1542, 1549)) {
            runScore = 52;
          } else if (totalRunTime.between(1548, 1555)) {
            runScore = 51;
          } else if (totalRunTime.between(1554, 1561)) {
            runScore = 51;
          } else if (totalRunTime.between(1560, 1567)) {
            runScore = 50;
          } else if (totalRunTime.between(1566, 1573)) {
            runScore = 49;
          } else if (totalRunTime.between(1572, 1579)) {
            runScore = 48;
          } else if (totalRunTime.between(1578, 1585)) {
            runScore = 47;
          } else if (totalRunTime.between(1584, 1591)) {
            runScore = 47;
          } else if (totalRunTime > 1590) {
            runScore = 0;
          }
        } //close female 57 - 61 age range

        if (age >= 62) {
          console.log('age range is 62 +');
          //calculate pushup score female 62+
          if (puCount >= 25) {
            puScore = 100;
          } else if (puCount == 24) {
            puScore = 98;
          } else if (puCount == 23) {
            puScore = 96;
          } else if (puCount == 22) {
            puScore = 93;
          } else if (puCount == 21) {
            puScore = 91;
          } else if (puCount == 20) {
            puScore = 89;
          } else if (puCount == 19) {
            puScore = 87;
          } else if (puCount == 18) {
            puScore = 84;
          } else if (puCount == 17) {
            puScore = 82;
          } else if (puCount == 16) {
            puScore = 80;
          } else if (puCount == 15) {
            puScore = 78;
          } else if (puCount == 14) {
            puScore = 76;
          } else if (puCount == 13) {
            puScore = 73;
          } else if (puCount == 12) {
            puScore = 71;
          } else if (puCount == 11) {
            puScore = 69;
          } else if (puCount == 10) {
            puScore = 67;
          } else if (puCount == 9) {
            puScore = 64;
          } else if (puCount == 8) {
            puScore = 62;
          } else if (puCount == 7) {
            puScore = 60;
          } else if (puCount == 6) {
            puScore = 58;
          } else if (puCount == 5) {
            puScore = 56;
          } else if (puCount < 5) {
            puScore = 0;
          }
          //calculate situp score female 62+
          if (suCount >= 63) {
            suScore = 100;
          } else if (suCount == 62) {
            suScore = 99;
          } else if (suCount == 61) {
            suScore = 98;
          } else if (suCount == 60) {
            suScore = 97;
          } else if (suCount == 59) {
            suScore = 96;
          } else if (suCount == 58) {
            suScore = 95;
          } else if (suCount == 57) {
            suScore = 94;
          } else if (suCount == 56) {
            suScore = 92;
          } else if (suCount == 55) {
            suScore = 91;
          } else if (suCount == 54) {
            suScore = 90;
          } else if (suCount == 53) {
            suScore = 89;
          } else if (suCount == 52) {
            suScore = 88;
          } else if (suCount == 51) {
            suScore = 87;
          } else if (suCount == 50) {
            suScore = 86;
          } else if (suCount == 49) {
            suScore = 85;
          } else if (suCount == 48) {
            suScore = 84;
          } else if (suCount == 47) {
            suScore = 83;
          } else if (suCount == 46) {
            suScore = 82;
          } else if (suCount == 45) {
            suScore = 81;
          } else if (suCount == 44) {
            suScore = 79;
          } else if (suCount == 43) {
            suScore = 78;
          } else if (suCount == 42) {
            suScore = 77;
          } else if (suCount == 41) {
            suScore = 76;
          } else if (suCount == 40) {
            suScore = 75;
          } else if (suCount == 39) {
            suScore = 74;
          } else if (suCount == 38) {
            suScore = 73;
          } else if (suCount == 37) {
            suScore = 72;
          } else if (suCount == 36) {
            suScore = 71;
          } else if (suCount == 35) {
            suScore = 70;
          } else if (suCount == 34) {
            suScore = 69;
          } else if (suCount == 33) {
            suScore = 68;
          } else if (suCount == 32) {
            suScore = 66;
          } else if (suCount == 31) {
            suScore = 65;
          } else if (suCount == 30) {
            suScore = 64;
          } else if (suCount == 29) {
            suScore = 63;
          } else if (suCount == 28) {
            suScore = 62;
          } else if (suCount == 27) {
            suScore = 61;
          } else if (suCount == 26) {
            suScore = 60;
          } else if (suCount == 25) {
            suScore = 59;
          } else if (suCount == 24) {
            suScore = 58;
          } else if (suCount == 23) {
            suScore = 57;
          } else if (suCount == 22) {
            suScore = 56;
          } else if (suCount == 21) {
            suScore = 55;
          } else if (suCount < 21) {
            suScore = 0;
          }
          //calculate run score female 62+
          if (totalRunTime <= 1200) {
            runScore = 100;
          } else if (totalRunTime.between(1200, 1207)) {
            runScore = 99;
          } else if (totalRunTime.between(1206, 1213)) {
            runScore = 98;
          } else if (totalRunTime.between(1212, 1219)) {
            runScore = 98;
          } else if (totalRunTime.between(1218, 1225)) {
            runScore = 97;
          } else if (totalRunTime.between(1224, 1231)) {
            runScore = 96;
          } else if (totalRunTime.between(1230, 1237)) {
            runScore = 95;
          } else if (totalRunTime.between(1236, 1243)) {
            runScore = 94;
          } else if (totalRunTime.between(1242, 1249)) {
            runScore = 94;
          } else if (totalRunTime.between(1248, 1255)) {
            runScore = 93;
          } else if (totalRunTime.between(1254, 1261)) {
            runScore = 92;
          } else if (totalRunTime.between(1260, 1267)) {
            runScore = 91;
          } else if (totalRunTime.between(1266, 1273)) {
            runScore = 90;
          } else if (totalRunTime.between(1272, 1279)) {
            runScore = 90;
          } else if (totalRunTime.between(1278, 1285)) {
            runScore = 89;
          } else if (totalRunTime.between(1284, 1291)) {
            runScore = 88;
          } else if (totalRunTime.between(1290, 1297)) {
            runScore = 87;
          } else if (totalRunTime.between(1296, 1303)) {
            runScore = 86;
          } else if (totalRunTime.between(1302, 1309)) {
            runScore = 86;
          } else if (totalRunTime.between(1308, 1315)) {
            runScore = 85;
          } else if (totalRunTime.between(1314, 1321)) {
            runScore = 84;
          } else if (totalRunTime.between(1320, 1327)) {
            runScore = 83;
          } else if (totalRunTime.between(1326, 1333)) {
            runScore = 82;
          } else if (totalRunTime.between(1332, 1339)) {
            runScore = 82;
          } else if (totalRunTime.between(1338, 1345)) {
            runScore = 81;
          } else if (totalRunTime.between(1344, 1351)) {
            runScore = 80;
          } else if (totalRunTime.between(1350, 1357)) {
            runScore = 79;
          } else if (totalRunTime.between(1356, 1363)) {
            runScore = 78;
          } else if (totalRunTime.between(1362, 1369)) {
            runScore = 78;
          } else if (totalRunTime.between(1368, 1375)) {
            runScore = 77;
          } else if (totalRunTime.between(1374, 1381)) {
            runScore = 76;
          } else if (totalRunTime.between(1380, 1387)) {
            runScore = 75;
          } else if (totalRunTime.between(1386, 1393)) {
            runScore = 74;
          } else if (totalRunTime.between(1392, 1399)) {
            runScore = 74;
          } else if (totalRunTime.between(1398, 1405)) {
            runScore = 73;
          } else if (totalRunTime.between(1404, 1411)) {
            runScore = 72;
          } else if (totalRunTime.between(1410, 1417)) {
            runScore = 71;
          } else if (totalRunTime.between(1416, 1423)) {
            runScore = 70;
          } else if (totalRunTime.between(1422, 1429)) {
            runScore = 70;
          } else if (totalRunTime.between(1428, 1435)) {
            runScore = 69;
          } else if (totalRunTime.between(1434, 1441)) {
            runScore = 68;
          } else if (totalRunTime.between(1440, 1447)) {
            runScore = 67;
          } else if (totalRunTime.between(1446, 1453)) {
            runScore = 66;
          } else if (totalRunTime.between(1452, 1459)) {
            runScore = 66;
          } else if (totalRunTime.between(1458, 1465)) {
            runScore = 65;
          } else if (totalRunTime.between(1464, 1471)) {
            runScore = 64;
          } else if (totalRunTime.between(1470, 1477)) {
            runScore = 63;
          } else if (totalRunTime.between(1476, 1483)) {
            runScore = 62;
          } else if (totalRunTime.between(1482, 1489)) {
            runScore = 62;
          } else if (totalRunTime.between(1488, 1495)) {
            runScore = 61;
          } else if (totalRunTime.between(1494, 1501)) {
            runScore = 60;
          } else if (totalRunTime.between(1500, 1507)) {
            runScore = 59;
          } else if (totalRunTime.between(1506, 1513)) {
            runScore = 58;
          } else if (totalRunTime.between(1512, 1519)) {
            runScore = 58;
          } else if (totalRunTime.between(1518, 1525)) {
            runScore = 57;
          } else if (totalRunTime.between(1524, 1531)) {
            runScore = 56;
          } else if (totalRunTime.between(1530, 1537)) {
            runScore = 55;
          } else if (totalRunTime.between(1536, 1543)) {
            runScore = 54;
          } else if (totalRunTime.between(1542, 1549)) {
            runScore = 54;
          } else if (totalRunTime.between(1548, 1555)) {
            runScore = 53;
          } else if (totalRunTime.between(1554, 1561)) {
            runScore = 52;
          } else if (totalRunTime.between(1560, 1567)) {
            runScore = 51;
          } else if (totalRunTime.between(1566, 1573)) {
            runScore = 50;
          } else if (totalRunTime.between(1572, 1579)) {
            runScore = 50;
          } else if (totalRunTime.between(1578, 1585)) {
            runScore = 49;
          } else if (totalRunTime.between(1584, 1591)) {
            runScore = 48;
          } else if (totalRunTime > 1590) {
            runScore = 0;
          }
        } //close female 62 +

      } //close female if

      var gradeResults = document.getElementById('gradeResults');
      var ifFail = document.getElementById('ifFail');
      var puScoreboard = document.getElementById('puScoreboard');
      var suScoreboard = document.getElementById('suScoreboard');
      var runScoreboard = document.getElementById('runScoreboard');

      var totalScore = parseInt(puScore) + parseInt(suScore) + parseInt(runScore);

      //place all userdata into hidden inputs for DAFORM
      $('.ag').val(age);
      $('.ge').val(gender);
      $('.pc').val(puCount);
      $('.ps').val(puScore);
      $('.sc').val(suCount);
      $('.ss').val(suScore);
      $('.rtm').val(minutes);
      $('.rts').val(fbseconds);
      $('.rs').val(runScore);
      $('.ts').val(totalScore);

      //Set background color dependant on pass/fail
      if (puScore >= 60) {
        puScoreboard.innerHTML = '<h3>Push Ups Score: ' + puScore + '/100 <i class="fa fa-check"></i></h3>';
      } else {
        puScoreboard.innerHTML = '<h3>Push Ups Score: ' + puScore + '/100 <i class="fa fa-times"></i></h3>';
      }
      if (suScore >= 60) {
        suScoreboard.innerHTML = '<h3>Sit Ups Score: ' + suScore + '/100 <i class="fa fa-check"></i></h3>';
      } else {
        suScoreboard.innerHTML = '<h3>Sit Ups Score: ' + suScore + '/100 <i class="fa fa-times"></i></h3>';
      }
      if (runScore >= 60) {
        runScoreboard.innerHTML = '<h3>Run Score: ' + runScore + '/100 <i class="fa fa-check"></i></h3>';
      } else {
        runScoreboard.innerHTML = '<h3>Run Score: ' + runScore + '/100 <i class="fa fa-times"></i></h3>';
      }

      //If any event was failed, display the fail notice because we can
      //Can update from a failing grade to a passing grade, but not the other way around

      if (puScore < 60 || suScore < 60 || runScore < 60) {
        //console.log('PT Test Failed');
        ifFail.innerHTML = '<h2 class="ptFail">FAIL</h2>';
        window.scrollTo(0, document.body.scrollHeight);
      } else if (puScore >= 60 || suScore >= 60 || runScore >= 60) {
        ifFail.style.display = 'none';
        window.scrollTo(0, document.body.scrollHeight);
      }

      gradeResults.innerHTML = '<h2>Total Score: ' + totalScore + '</h2>';
      var name = encodeURI("I got a " + totalScore + " on my APFT! " + puCount + " pushups, " + suCount + " sit-ups, and a " + minutes + ":" + fbseconds + " 2 mile run time!");
      var desc = encodeURI("Did you pass your PT test? Find out with our free mobile friendly APFT grading application.");
      var picture = "http://apftgrader.com/img/favicon-310.png";
      var fbUrl = "https://www.facebook.com/dialog/feed?display=page&app_id=500166883449502&link=http://apftgrader.com" + $("#thisPage").text() + "&picture=" + picture + "&name=" + name + "&description=" + desc + "&redirect_uri=http://apftgrader.com";
      $("a#fbAlt").attr("href", fbUrl);
    }
  });
});