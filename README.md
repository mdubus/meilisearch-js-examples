# meilisearch-js-examples

A list of Javascript examples to communicate with MeiliSearch

## Requirements

- npm or yarn
- node

## Setup

Create a `config.json` file with the environment variables and their credentials.
An example can be found [in config_example.json](./config_example.json)

## Usage

Depending on your needs, choose the corresponding script. The `MS_ENV` must be provided to determine which MeiliSearch instance to use.

```bash
MS_ENV=<ENV> node <path-to-script>
```

Example :

```bash
MS_ENV="localhost" node src/get_update_status.js
```
