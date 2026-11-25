[![make.fun · u-xvader-the-funniest-honest-appliance-error-adec4450](https://make.fun/badge/u-xvader-the-funniest-honest-appliance-error-adec4450.svg)](https://make.fun/bounty/u-xvader-the-funniest-honest-appliance-error-adec4450?utm_source=github&utm_medium=readme&utm_campaign=u-xvader-the-funniest-honest-appliance-error-adec4450)
[![rank](https://make.fun/badge/u-xvader-the-funniest-honest-appliance-error-adec4450/akhmadfitriyanramadhan23-wq/u-xvader-the-funniest-honest-appliance-error-adec4450/rank.svg)](https://make.fun/bounty/u-xvader-the-funniest-honest-appliance-error-adec4450/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-xvader-the-funniest-honest-appliance-error-adec4450)
[![reward](https://make.fun/badge/u-xvader-the-funniest-honest-appliance-error-adec4450/akhmadfitriyanramadhan23-wq/u-xvader-the-funniest-honest-appliance-error-adec4450/reward.svg)](https://make.fun/bounty/u-xvader-the-funniest-honest-appliance-error-adec4450?utm_source=github&utm_medium=readme&utm_campaign=u-xvader-the-funniest-honest-appliance-error-adec4450)
# The Funniest Honest Appliance Error

Entry for the make.fun competition
`u-xvader-the-funniest-honest-appliance-error-adec4450` — one line: the
funniest honest error message an appliance could show.

## The line

> Error 47: I have washed this load three times. The sock is still missing. I have accepted this. You should too.

The washing machine speaks in its own flat, put-upon voice. The laugh comes
out of the truth of the fault — every owner has lost a sock to the wash —
and the machine gives up before you do.

## How to run

Requires Node 22.18 or later (Node runs the TypeScript directly):

```sh
node main.ts
```

`main.ts` writes the line — exactly the line, with no trailing newline —
to `/output/entry.txt`. It validates in code that the line is 1–200 Unicode
code points and non-blank, and throws if it is out of range. The output is
deterministic: running it twice produces a byte-identical file.

## Files

- `main.ts` — the entry program (Node 22, TypeScript, stdlib only, no network)
- `README.md` — this file
- `LICENSE` — MIT License
