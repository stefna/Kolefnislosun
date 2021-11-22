const categories = [
    {
        title: "Búfé og búfjáráburður",
        declension: "búfjár og búfjáráburðar",
        subcategories: [
            {
                title: "Nautgripir",
                unit: "Fjöldi gripa",
                emissionItems: [
                    {
                        title: "Mjólkandi kýr",
                        input: '',
                        emissionFactors: [
                            {
                                title: "Innyflagerjun",
                                value: 2332
                            },
                            {
                                title: "Búfjáráburður",
                                value: 742
                            }
                        ]
                    },
                    {
                        title: "Aðrir fullorðnir gripir (> 1 árs)",
                        input: '',
                        emissionFactors: [
                            {
                                title: "Innyflagerjun",
                                value: 1200
                            },
                            {
                                title: "Búfjáráburður",
                                value: 288
                            }
                        ]
                    },
                    {
                        title: "Ungneyti (< 1 árs)",
                        input: '',
                        emissionFactors: [
                            {
                                title: "Innyflagerjun",
                                value: 450
                            },
                            {
                                title: "Búfjáráburður",
                                value: 123
                            }
                        ]
                    }
                ]
            },
            {
                title: "Sauðfé",
                unit: "Fjöldi gripa",
                emissionItems: [
                    {
                        title: "Vetrarfóðraðar ær",
                        input: '',
                        emissionFactors: [
                            {
                                title: "Innyflagerjun",
                                value: 305
                            },
                            {
                                title: "Búfjáráburður",
                                value: 13.1
                            }
                        ]
                    },
                    {
                        title: "Annað fullorðið fé",
                        input: '',
                        emissionFactors: [
                            {
                                title: "Innyflagerjun",
                                value: 322
                            },
                            {
                                title: "Búfjáráburður",
                                value: 13.8
                            }
                        ]
                    },
                    {
                        title: "Gemlingar",
                        input: '',
                        emissionFactors: [
                            {
                                title: "Innyflagerjun",
                                value: 188
                            },
                            {
                                title: "Búfjáráburður",
                                value: 9.7
                            }
                        ]
                    },
                    {
                        title: "Lömb",
                        input: '',
                        emissionFactors: [
                            {
                                title: "Innyflagerjun",
                                value: 79
                            },
                            {
                                title: "Búfjáráburður",
                                value: 0.9
                            }
                        ]
                    },
                ]
            },
            {
                title: "Geitur",
                unit: "Fjöldi gripa",
                emissionItems: [
                    {
                        title: "Geitur óháð aldri",
                        input: '',
                        emissionFactors: [
                            {
                                title: "Innyflagerjun",
                                value: 115
                            },
                            {
                                title: "Búfjáráburður",
                                value: 5
                            }
                        ]
                    }
                ]
            },
            {
                title: "Hross",
                unit: "Fjöldi gripa",
                emissionItems: [
                    {
                        title: "Hross óháð aldri",
                        input: '',
                        emissionFactors: [
                            {
                                title: "Innyflagerjun",
                                value: 450
                            },
                            {
                                title: "Búfjáráburður",
                                value: 27
                            }
                        ]
                    }
                ]
            },
            {
                title: "Svín",
                unit: "Fjöldi gripa",
                emissionItems: [
                    {
                        title: "Gyltur",
                        input: '',
                        emissionFactors: [
                            {
                                title: "Innyflagerjun",
                                value: 37
                            },
                            {
                                title: "Búfjáráburður",
                                value: 154
                            }
                        ]
                    },
                    {
                        title: "Grísir",
                        input: '',
                        emissionFactors: [
                            {
                                title: "Innyflagerjun",
                                value: 37
                            },
                            {
                                title: "Búfjáráburður",
                                value: 154
                            }
                        ]
                    }
                ]
            },
            {
                title: "Alifuglar",
                unit: "Fjöldi gripa",
                emissionItems: [
                    {
                        title: "Alifuglar",
                        input: '',
                        emissionFactors: [
                            {
                                title: "Innyflagerjun",
                                value: 0.4
                            },
                            {
                                title: "Búfjáráburður",
                                value: 1.6
                            }
                        ]
                    }
                ]
            },
            {
                title: "Loðdýr",
                unit: "Fjöldi gripa",
                emissionItems: [
                    {
                        title: "Loðdýr",
                        input: '',
                        emissionFactors: [
                            {
                                title: "Innyflagerjun",
                                value: 2.5
                            },
                            {
                                title: "Búfjáráburður",
                                value: 57
                            }
                        ]
                    }
                ]
            },
        ]
    },
    {
        title: "Landnýting",
        declension: "landnýtingar",
        subcategories: [
            {
                title: "Tún og annað ræktað land",
                unit: "Fjöldi hektara",
                emissionItems: [
                    {
                        title: "Þurrlendistún",
                        input: '',
                        emissionFactors: [
                            {
                                value: -626,
                            }
                        ]
                    },
                    {
                        title: "Mýrartún",
                        input: '',
                        emissionFactors: [
                            {
                                value: 28967,
                            }
                        ]
                    },
                    {
                        title: "Losun v. áburðargjafar",
                        input: '',
                        emissionFactors: [
                            {
                                value: 1000,
                            }
                        ]
                    }
                ]
            },
            {
                title: "Skóglendi",
                unit: "Fjöldi hektara",
                emissionItems: [
                    {
                        title: "Ræktað skóglendi",
                        input: '',
                        emissionFactors: [
                            {
                                value: -7000,
                            }
                        ]
                    },
                    {
                        title: "Villt birkiskóglendi",
                        input: '',
                        emissionFactors: [
                            {
                                value: -1000,
                            }
                        ]
                    }
                ]
            },
            {
                title: "Landgræðsla",
                unit: "Fjöldi hektara",
                emissionItems: [
                    {
                        title: "Virk landgræðslusvæði",
                        input: '',
                        emissionFactors: [
                            {
                                value: -2100,
                            }
                        ]
                    }
                ]
            },
            {
                title: "Votlendi",
                unit: "Fjöldi hektara",
                emissionItems: [
                    {
                        title: "Framræst votlendi (ekki tún)",
                        input: '',
                        emissionFactors: [
                            {
                                value: 22800,
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        title: "Eldsneyti til búrekstrar",
        declension: "eldsneytis til búrekstrar",
        subcategories: [
            {
                title: "Olíunotkun traktora",
                unit: "Fjöldi lítra",
                emissionItems: [
                    {
                        title: "Lítrar olía á ári",
                        input: '',
                        emissionFactors: [
                            {
                                value: 2.7,
                            }
                        ]
                    },
                ]
            },
            {
                title: "Bensínnotkun bíls v. bús",
                unit: "Fjöldi lítra",
                emissionItems: [
                    {
                        title: "Lítrar bensín á bíla",
                        input: '',
                        emissionFactors: [
                            {
                                value: 2.32,
                            }
                        ]
                    },
                ]
            },
            {
                title: "Olíunotkun bíla v. bús",
                unit: "Fjöldi lítra",
                emissionItems: [
                    {
                        title: "Lítrar olía á bíla",
                        input: '',
                        emissionFactors: [
                            {
                                value: 2.7,
                            }
                        ]
                    }
                ]
            }
        ]
    },
];
let calculationMap = {
};
let calculationResults = {
};

/** HTML SETUP */
let ret = '';

for(let i = 0; i < categories.length; i++) {
    let categoryTitle = categories[i].title;
    ret = '<div class="category"><div class="category__content"><h2 class="category__title">'
    + categoryTitle + '</h2><div class="subcategories">';

    for(let j = 0; j < categories[i].subcategories.length; j++) {
        let subCategory = categories[i].subcategories[j];
        ret += '<div class="subcategory"><h3 class="subcategory__title">' + subCategory.title + '</h3>'
        + '<span class="subcategory__unit">' + subCategory.unit + '</span><div class="emissionItems">';

        for (let k = 0; k < categories[i].subcategories[j].emissionItems.length; k++) {
            const emissionItem = categories[i].subcategories[j].emissionItems[k];
            ret += "<div class='emissionItem'>"
            + "<label for='" + emissionItem.title + "'>" + emissionItem.title + "</label>"
            + "<input id='" + emissionItem.title + "' type='number' min='0' max='1000000'"
            + "value='" + "" + emissionItem.input + "" + "'"
            + "oninput=handleNumberInput(" + "'" + encodeURIComponent(categoryTitle) + "'" + ",'" + encodeURIComponent(JSON.stringify(emissionItem)) + "')>"
            + "</div>";
        }
    }
    ret += '<div class="category__emission">'
        + '<div class="emission__label">Samtals losun vegna ' +  categories[i].declension + ':</div>'
        + '<span class="emission__amount" id="' + categoryTitle + '"></span></div>';

    ret += '</div></div></div>';
    document.getElementById('categories').innerHTML += ret;
}
/** HTML SETUP END */

function createEmissionCategoriesHtml(total) {
    const totalAmount = document.getElementById('total__amount');
    totalAmount.innerHTML = total;
}

function createEmissionCategoryHtml(total, category) {
    const totalAmount = document.getElementById(category);
    totalAmount.innerHTML = total;
}

function createHtml(categoryTitle, subCategory, ret) {
    let sub = '<div class="subcategories"><div class="subcategory"><h3 class="subcategory__title">' + subCategory.title + '</h3>'
    + '<span class="subcategory__unit">' + subCategory.unit + '</span>'
    + '<div class="emissionItems" id="emissionItems">';

    ret += sub;
    
    for (let i = 0; i < subCategory.emissionItems.length; i++) {
        let emissionItem = subCategory.emissionItems[i];
        let item = "<div class='emissionItem'>"
        + "<label for='" + emissionItem.title + "'>" + emissionItem.title + "</label>"
        + "<input id='" + emissionItem.title + "' type='number' min='0' max='1000000'"
        + "value='" + "" + emissionItem.input + "" + "'"
        + "oninput=handleNumberInput(" + "'" + encodeURIComponent(categoryTitle) + "'" + ",'" + encodeURIComponent(JSON.stringify(emissionItem)) + "')>"
        + "</div>";
        sub += item;
    }
    sub += '</div></div></div>';
    document.getElementById('categories').innerHTML += sub;
}

function getSeparateEmission() {
    let results = '';
    document.getElementById('results__factors').innerHTML = '';
    for (const [key, value] of Object.entries(calculationResults)) {
        results = '<div class="results__factor"><div class="factor__title">' + key + '</div>'
        + '<div class="factor__value">' + numberWithTousandSeperator(value) + '</div></div>';
        document.getElementById('results__factors').innerHTML += results;
    }
}

function calculate(categoryTitle, emissionItem) {
    let calcMap = calculationMap;
    if (!calcMap[categoryTitle]) {
        calcMap[categoryTitle] = {};
    }

    const emissionFactors = deepCopy(emissionItem.emissionFactors);
    const emissionItemValue = document.getElementById(emissionItem.title).value;
    let results = emissionFactors.map(subfactor => subfactor.value * emissionItemValue);
    let resultsSum = results.reduce((resultsSum, x) => resultsSum + x);
    calcMap[categoryTitle][emissionItem.title] = resultsSum;

    calculationMap = calcMap;
    updateResults();
}

function updateResults() {
    for (const key in calculationMap) {
        if (calculationMap.hasOwnProperty(key)) {
            let category = calculationMap[key];
            if (category !== undefined) {

                const omissionValues = Object.values(category);
                const sum = omissionValues.reduce((a, b) => {return a + b});
                updateCategoryResult(key, sum);
            }
        }
    }
}

function updateCategoryResult(category, value) {
    const calcResults = calculationResults;
    calcResults[category] = value;
    calculationResults = calcResults;
    getCategoryEmission(category);
    getEmissionFromAllCategories();
    getSeparateEmission();
}

function getCategoryEmission(category) {
    total = 0;
    if (calculationResults[category]) {
        let emissionTotal = calculationResults[category];
        total = numberWithTousandSeperator(emissionTotal);
    }
    createEmissionCategoryHtml(total, category);
}

function getEmissionFromAllCategories() {
    let total = 0;
    for (const key in calculationResults) {
        if (calculationResults.hasOwnProperty(key)) {
            let category = calculationResults[key];
            if (category !== undefined) {
                total += category;
            }
        }
    }
    createEmissionCategoriesHtml(numberWithTousandSeperator(total));
}

function numberWithTousandSeperator(number) {
    number = Math.round(number);
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function handleNumberInput(categoryTitle, emissionItem) {
    ctDecode = decodeURIComponent(categoryTitle);
    eiDecode = JSON.parse(decodeURIComponent(emissionItem));
    if (eiDecode.input.length > 7) {
        eiDecode.input = eiDecode.input.slice(0,7);
    }
    this.calculate(ctDecode, eiDecode);
}

function deepCopy(json) {
    return JSON.parse(JSON.stringify(json));
}