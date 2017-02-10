/**
* Every periods, question marks, etc.
* the next word will be capitalized.
* e.g: "Hello world. I am a developer! Please to meet you"
*
* @param string $value
* @return closure
*/

public function capitalize($value)
    {
        return preg_replace_callback('/([.!?])\s*(\w)/', function ($matches) {
                    return strtoupper($matches[1] . ' ' . $matches[2]);
                }, ucfirst(strtolower($value)));
    }
