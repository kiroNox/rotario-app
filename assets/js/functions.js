
// exporta una funcion que reciba un string y dentro de un try catch lo intente pasar a un json y lo devuelva si es valido si no devuelve false

export function parseJson(str) {
        try {
            var json = JSON.parse(str);
        } catch (e) {
            return false;
        }
        return json;
    }