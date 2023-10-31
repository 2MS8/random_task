let range1 = document.querySelector("#range1");
let range2 = document.querySelector("#range2");
let output = document.querySelector(".output");
let generate_btn = document.querySelector("#generate_btn");
const apiData = document.querySelector(".apiData");
const tasks = document.querySelector("#tasks");
const output_space = document.querySelector(".output-space");

tasks.addEventListener("change", () => {
  console.log(tasks.value, "case");
  switch (tasks.value) {
    case "color":
      range1.style.display = "none";
      range2.style.display = "none";
      const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
      generate_btn.addEventListener("click", () => {
        let hexColor = "#";

        for (let i = 0; i < 6; i++) {
          hexColor += hex[Math.trunc(Math.random() * 16)];
        }

        // document.body.style.backgroundColor = hexColor;
        output.innerText = `"${hexColor}"`;
        output_space.style.backgroundColor = hexColor;
      });
      break;
    case "number":
      range1.style.display = "block";
      range2.style.display = "block";

      // output_space.style.backgroundColor = "#7978d0";

      generate_btn.addEventListener("click", () => {
        let min = Number(range1.value);
        let max = Number(range2.value);
        let num = Math.random() * (max - min) + min;
        output.innerHTML = Math.trunc(num);
        output_space.style.backgroundColor = "#7978d0";

        // document.body.style.backgroundColor = "#fff";
      });
      break;

    case "password":
      range1.style.display = "none";
      range2.style.display = "none";

      generate_btn.addEventListener("click", () => {
        output_space.style.backgroundColor = "#7978d0";

        let pass = "";
        let str =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
          "abcdefghijklmnopqrstuvwxyz0123456789@#$";

        for (let i = 1; i <= 8; i++) {
          let char = Math.floor(Math.random() * str.length + 1);

          pass += str.charAt(char);
        }

        output.innerHTML = pass;
      });
      break;

    case "word":
      range1.style.display = "none";
      range2.style.display = "none";

      const getWord = () => {
        const wordArr = [
          "abandoned",
          "able",
          "absolute",
          "adorable",
          "adventurous",
          "academic",
          "acceptable",
          "acclaimed",
          "accomplished",
          "accurate",
          "aching",
          "acidic",
          "acrobatic",
          "active",
          "actual",
          "adept",
          "admirable",
          "admired",
          "adolescent",
          "adorable",
          "adored",
          "advanced",
          "afraid",
          "affectionate",
          "aged",
          "aggravating",
          "aggressive",
          "agile",
          "agitated",
          "agonizing",
          "agreeable",
          "ajar",
          "alarmed",
          "alarming",
          "alert",
          "alienated",
          "alive",
          "all",
          "altruistic",
          "amazing",
          "ambitious",
          "ample",
          "amused",
          "amusing",
          "anchored",
          "ancient",
          "angelic",
          "angry",
          "anguished",
          "animated",
          "annual",
          "another",
          "antique",
          "anxious",
          "any",
          "apprehensive",
          "appropriate",
          "apt",
          "arctic",
          "arid",
          "aromatic",
          "artistic",
          "ashamed",
          "assured",
          "astonishing",
          "athletic",
          "attached",
          "attentive",
          "attractive",
          "austere",
          "authentic",
          "authorized",
          "automatic",
          "avaricious",
          "average",
          "aware",
          "awesome",
          "awful",
          "awkward",
          "babyish",
          "bad",
          "back",
          "baggy",
          "bare",
          "barren",
          "basic",
          "beautiful",
          "belated",
          "beloved",
          "beneficial",
          "better",
          "best",
          "bewitched",
          "big",
          "bighearted",
          "biodegradable",
          "bitesized",
          "bitter",
          "black",
        ];
        const randomWord = wordArr[Math.floor(Math.random() * wordArr.length)];

        output.innerText = randomWord;
      };
      generate_btn.addEventListener("click", () => {
        output_space.style.backgroundColor = "#7978d0";
        getWord();
      });

      break;

    case "country":
      range1.style.display = "none";
      range2.style.display = "none";

      const countryData = () => {
        var country_list = [
          "Afghanistan",
          "Albania",
          "Algeria",
          "Andorra",
          "Angola",
          "Anguilla",
          "Antigua &amp; Barbuda",
          "Argentina",
          "Armenia",
          "Aruba",
          "Australia",
          "Austria",
          "Azerbaijan",
          "Bahamas",
          "Bahrain",
          "Bangladesh",
          "Barbados",
          "Belarus",
          "Belgium",
          "Belize",
          "Benin",
          "Bermuda",
          "Bhutan",
          "Bolivia",
          "Bosnia &amp; Herzegovina",
          "Botswana",
          "Brazil",
          "British Virgin Islands",
          "Brunei",
          "Bulgaria",
          "Burkina Faso",
          "Burundi",
          "Cambodia",
          "Cameroon",
          "Cape Verde",
          "Cayman Islands",
          "Chad",
          "Chile",
          "China",
          "Colombia",
          "Congo",
          "Cook Islands",
          "Costa Rica",
          "Cote D Ivoire",
          "Croatia",
          "Cruise Ship",
          "Cuba",
          "Cyprus",
          "Czech Republic",
          "Denmark",
          "Djibouti",
          "Dominica",
          "Dominican Republic",
          "Ecuador",
          "Egypt",
          "El Salvador",
          "Equatorial Guinea",
          "Estonia",
          "Ethiopia",
          "Falkland Islands",
          "Faroe Islands",
          "Fiji",
          "Finland",
          "France",
          "French Polynesia",
          "French West Indies",
          "Gabon",
          "Gambia",
          "Georgia",
          "Germany",
          "Ghana",
          "Gibraltar",
          "Greece",
          "Greenland",
          "Grenada",
          "Guam",
          "Guatemala",
          "Guernsey",
          "Guinea",
          "Guinea Bissau",
          "Guyana",
          "Haiti",
          "Honduras",
          "Hong Kong",
          "Hungary",
          "Iceland",
          "India",
          "Indonesia",
          "Iran",
          "Iraq",
          "Ireland",
          "Isle of Man",
          "Israel",
          "Italy",
          "Jamaica",
          "Japan",
          "Jersey",
          "Jordan",
          "Kazakhstan",
          "Kenya",
          "Kuwait",
          "Kyrgyz Republic",
          "Laos",
          "Latvia",
          "Lebanon",
          "Lesotho",
          "Liberia",
          "Libya",
          "Liechtenstein",
          "Lithuania",
          "Luxembourg",
          "Macau",
          "Macedonia",
          "Madagascar",
          "Malawi",
          "Malaysia",
          "Maldives",
          "Mali",
          "Malta",
          "Mauritania",
          "Mauritius",
          "Mexico",
          "Moldova",
          "Monaco",
          "Mongolia",
          "Montenegro",
          "Montserrat",
          "Morocco",
          "Mozambique",
          "Namibia",
          "Nepal",
          "Netherlands",
          "Netherlands Antilles",
          "New Caledonia",
          "New Zealand",
          "Nicaragua",
          "Niger",
          "Nigeria",
          "Norway",
          "Oman",
          "Pakistan",
          "Palestine",
          "Panama",
          "Papua New Guinea",
          "Paraguay",
          "Peru",
          "Philippines",
          "Poland",
          "Portugal",
          "Puerto Rico",
          "Qatar",
          "Reunion",
          "Romania",
          "Russia",
          "Rwanda",
          "Saint Pierre &amp; Miquelon",
          "Samoa",
          "San Marino",
          "Satellite",
          "Saudi Arabia",
          "Senegal",
          "Serbia",
          "Seychelles",
          "Sierra Leone",
          "Singapore",
          "Slovakia",
          "Slovenia",
          "South Africa",
          "South Korea",
          "Spain",
          "Sri Lanka",
          "St Kitts &amp; Nevis",
          "St Lucia",
          "St Vincent",
          "St. Lucia",
          "Sudan",
          "Suriname",
          "Swaziland",
          "Sweden",
          "Switzerland",
          "Syria",
          "Taiwan",
          "Tajikistan",
          "Tanzania",
          "Thailand",
          "Timor L'Este",
          "Togo",
          "Tonga",
          "Trinidad &amp; Tobago",
          "Tunisia",
          "Turkey",
          "Turkmenistan",
          "Turks &amp; Caicos",
          "Uganda",
          "Ukraine",
          "United Arab Emirates",
          "United Kingdom",
          "Uruguay",
          "Uzbekistan",
          "Venezuela",
          "Vietnam",
          "Virgin Islands (US)",
          "Yemen",
          "Zambia",
          "Zimbabwe",
        ];

        const DataCountry =
          country_list[Math.floor(Math.random() * country_list.length)];

        output.innerText = DataCountry;
      };

      generate_btn.addEventListener("click", () => {
        output_space.style.backgroundColor = "#7978d0";
        countryData();
      });

      break;

    default:
      console.log("choose correct option");
      output.innerText = "Not available";
      break;
  }
});
