
```markdown
# Complete Passphrase Generator

This package provides a utility to generate complete passphrases of different lengths by combining a custom wordlist with an incomplete passphrase provided by the user.

## Installation

Before using the package, make sure you have Node.js installed on your system.

You can install the package via npm:

```bash
npm install pass-phrase-completion
```

## Usage

```javascript
const { completePassphrase } = require('pass-phrase-completion');

// Generate complete passphrases with incomplete phrases
const completePassphrases = completePassphrase(['incomplete', 'phrase']);

console.log(completePassphrases);
```

## API

### `completePassphrase(incompletePhrase)`

Generates complete passphrases of different lengths by combining a custom wordlist with an incomplete passphrase provided by the user.

- `incompletePhrase`: An array of words representing the incomplete passphrase.

Returns an object containing passphrases of lengths 12, 18, and 24.

## Error Handling

If an error occurs during passphrase completion, an error object will be returned.

## Contributing

Contributions are welcome! Please feel free to submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```
