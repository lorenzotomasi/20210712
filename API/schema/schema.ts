const ParkByIdJsonSchema = {
    type: "object",
    required: ["parkId"],
    properties: {
        parkId: { type: "number", example: 1, in: "path" },
    },
};

const AttractionByIdJsonSchema = {
    type: "object",
    required: ["parkId", "attractionId"],
    properties: {
        parkId: { type: "number", example: 1, in: "path" },
        attractionId: { type: "number", example: 1, in: "path" },
    },
};

// ! General 404 respons

const Response404WithID = {
    type: "object",
    properties: {
        statusCode: { type: "number", example: 404 },
        message: {
            type: "string",
            example: "No item present with this id",
        },
    },
};

// ! General response

// const ObjectTamplateResponse = {
//     type: "object",
//     properties: {
//         id: { type: "number", example: 1 },
//         objectName: { type: "string", example: "" },
//     },
// };

// ! General array response

// const ObjectArrayTamplateResponse = {
//     type: "array",
//     items: ObjectTamplateResponse,
// };
const WeatherTamplateResponse = {
    type: "object",
    properties: {
        id: { type: "number", example: 1 },
        date: { type: "string", example: "10/12/2021" },
        weather: { type: "string", example: "sunny" },
        temperature: { type: "number", example: 20 },
    }
}

const AttractionTamplateResponse = {
    type: "object",
    properties: {
        id: { type: "number", example: 1 },
        name: { type: "string", example: "name" },
        parkId: { type: "number", example: 1 },
        description: { type: "string", example: "description" },
        openTime: { type: "string", example: "10.10" },
        closeTime: { type: "string", example: "10.10" },
        averageTailTime: {type: "number", example: 1},
        minimumAccessAge: {type: "number", example: 1}
    }
}

const ParkTamplateResponse = {
    type: "object",
    properties: {
        id: { type: "number", example: 1 },
        name: { type: "string", example: "name" },
        attractionList: { type: "array", items:  AttractionTamplateResponse},
        description: { type: "string", example: "description" },
        openTime: { type: "string", example: "10.10" },
        closeTime: { type: "string", example: "10.10" },
        weather: {type: "array", items: WeatherTamplateResponse},
        parkingInformation: {type: "string", example: "esempio di dove possa essere"}
    }
}

// ? call for an array element
//         otherObject: {
//             type: "array",
//             items: ObjectArrayTamplateResponse,
//         },
//     },
// };

// const GeneralObjectArrayTamplateResponse = {
//     type: "array",
//     items: GeneralObjectTamplateResponse,
// };

// ! General params for body request
// const GeneralObjectTamplateBody = {
//     type: "object",
//     required: ["objectName", "otherPropBool"],
//     properties: {
//         objectName: { type: "string", example: "" },
//         otherPropBool: { type: "boolean", example: true },
//         otherPropNum: { type: "number", example: 2 },
//         otherPropString: { type: "string", example: "" },
//         otherPropStringFormatDate: {
//             type: "string",
//             format: "date",
//             example: "12:30",
//         },
//     },
// };

// ! General compleate response from GET
export const ParkResponseJsonSchema = {
    descritpion: "",
    params: ParkByIdJsonSchema,
    response: {
        200: ParkTamplateResponse,
        404: Response404WithID,
    },
};

export const AttractionResponseJsonSchema = {
    descritpion: "",
    params: AttractionByIdJsonSchema,
    response: {
        200: AttractionTamplateResponse,
        404: Response404WithID,
    },
};

// ! General compleate response for POST
// export const GeneralPostJsonSchema = {
//     description: "",
//     params: ParamsByIdJsonSchema,
//     body: GeneralObjectTamplateBody,
//     response: {
//         201: GeneralObjectTamplateResponse,
//         400: PostRespons400JsonSchema,
//         404: TaskListGetRespons404JsonSchema,
//     },
// };
