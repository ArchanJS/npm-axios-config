//Function which returns config according to the user's choice.

const axiosConfig = (type, token) => {

    const configList = [
        {
            headers: {
                "Content-Type": "application/json",
            }
        },
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            }
        },
        {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        },
        {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${token}`,
            }
        }
    ]

    let configInd = 0;

    switch (type) {
        case "pubConfig":
            break;
        case "privBearerConfig":
            configInd = 1;
            break;
        case "pubMultConfig":
            configInd = 2;
            break;
        case "privMultConfig":
            configInd = 3;
            break;
        default:
            break;
    }

    return configList[configInd];
}

module.exports = axiosConfig;