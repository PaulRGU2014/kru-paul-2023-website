const source = require('./sourceData.json');
function getKeyfromName(field){
    return field.trim().toLowerCase().replaceAll(' ', '_').replace(/[^A-Za-z0-9_]/g, '');
}
async function main(){
    const output = {'label': 'TVS'};
    output.fields = Object.keys(source[0]).map(field => {
        return {
            field: getKeyfromName(field),
            label:  `<p>${field}</p>`,
            grouping: "",
            description: "Lorem Ipsum Dolor Sit Amet",
            weight: -10
        }
    });

    output.fields = output.fields.filter(f => f.field !== getKeyfromName('Part Number'));

    output.product_field_groups = [
      {
        description: "<p>A group</p>",
        id: "group-a",
        weight: 0,
      },
      {
        description: "<p>Another Group</p>",
        id: "group-b",
        weight: 0,
      },
    ];

    output.products = source.map((product, idx) => {
        const specData = {};
        for(const key in product){
            if(!['NA', 'N/A'].includes(product[key])) {
                if(isNaN(product[key])){
                    specData[getKeyfromName(key)] = product[key];
                } else {
                    specData[getKeyfromName(key)] = +product[key];
                }
            }
        }
        delete specData[getKeyfromName("Part Number")];
        return {
            id: idx+1,
            number: product["Part Number"],
            link: `/product/${idx+1}`,
            spec_data: specData
        }
    });

    console.log(JSON.stringify(output, null, '  '));


}

main();