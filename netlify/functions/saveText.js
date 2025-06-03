exports.handler = async (event) => {
    const data = JSON.parse(event.body);
    console.log("Přijatý text:", data.text);

    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Text uložen!", receivedText: data.text }),
    };
};
