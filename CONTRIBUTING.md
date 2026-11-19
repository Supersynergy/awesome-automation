# Contribution Guidelines

Thanks for helping. Please read this before opening a pull request.

## What belongs here

- Tools, libraries, platforms and learning resources that automate something: workflows, browsers, desktops, homes, infrastructure, releases or software tests.
- Open source, or a free tier that is useful without sales contact.
- Actively maintained: not archived, with a commit in the last 24 months.
- Not already listed. Search the list first.

## How to add an entry

1. Edit **`data/list.txt`** only. `README.md` is generated.
2. Add one line to the right category:

   ```text
   Name | owner/repo | Short objective description.
   ```

   Use a full `https://` URL instead of `owner/repo` for sites that are not on GitHub.
3. The description starts with a capital letter, ends with a period, stays under 130 characters, describes the project (not the list) and is not marketing copy.
4. Run `npm run build` and `npm test`. Run `npm run verify` if you have an authenticated GitHub CLI.
5. Open a pull request titled `Add Name`, with the generated `README.md` included.

Entries are sorted alphabetically by the build step, so order in `data/list.txt` does not matter.

## Removing entries

Entries that are archived, renamed, deleted or inactive for more than 24 months are removed. A weekly workflow reports them.

## Categories

Propose a new category in an issue first. Keep categories small and clear; split one when it grows beyond roughly 30 entries.
