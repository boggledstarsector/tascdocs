# Creating new building docs pages

This guide describes how to add a documentation page for a TASC building, using the existing Domed Cities, Planetary Agrav Field, and Hydroponics pages as reference. Follow it whenever a new building needs a docs page.

## 1. Files to create

For a building with slug `<slug>` (e.g. `hydroponics`) and component name `<Name>` (e.g. `Hydroponics`):

1. **Route wrapper** — `app/docs/<slug>/page.tsx`
   - Mirrors [app/docs/hydroponics/page.tsx](../app/docs/hydroponics/page.tsx) exactly: imports `Banner`, `NavigationHeader`, the new `<Name>` component, and `ButtonFooter`, and renders them inside `<main>`.

2. **Content component** — `app/components/terraforming/buildings/<Name>.tsx`
   - Mirrors the structure used by [Hydroponics.tsx](../app/components/terraforming/buildings/Hydroponics.tsx), [DomedCities.tsx](../app/components/terraforming/buildings/DomedCities.tsx), and [PlanetaryAgravField.tsx](../app/components/terraforming/buildings/PlanetaryAgravField.tsx).
   - Uses the shared color tokens, no extra utilities.

3. **Building icon** — `public/images/buildings/terraforming/<slug>.png`
   - Confirm the icon is present under `public/images/buildings/terraforming/` before referencing it.

No navigation/index file needs updating — building components are not registered anywhere else in the app today.

## 2. Color tokens and formatting conventions

The existing components hard-code these colors inline. Reuse them exactly for visual consistency:

| Purpose                              | Value                       |
| ------------------------------------ | --------------------------- |
| Cyan — links, image border, headings | `rgb(5, 250, 250)`          |
| Yellow — highlighted numbers / costs | `rgb(255, 210, 0)`          |
| Red — "No" / negative / malus        | `rgb(200, 10, 20)`          |
| Green — "Yes" / positive             | `rgb(5, 115, 10)`           |
| Muted notes                          | `italic opacity-60` classes |

Layout wrapper for the section: `w-full lg:max-w-[1200px] lg:mx-auto`, with the inner section `flex flex-col py-8 px-[2.5%] gap-4 text-base leading-relaxed`.

## 3. Component section order

Use this exact order so all building pages look the same:

1. **Title** — `<h1 className="text-3xl font-bold">`
2. **Building image** — bordered with the cyan token, `h-auto`, left-aligned
3. **Italic flavor text** — wrapped in `md:max-w-[750px]`
4. **Enabled by default** — `Yes` (green) or `No` (red); add `(use LunaLib settings to enable)` muted-italic note when relevant
5. **Build cost** — single yellow credit value
6. **Monthly upkeep** — yellow credit value followed by ` * (colony size - 2)`
7. **Supply** — commodity icons (see §5)
8. **Demand** — commodity icons (see §5)
9. **Effects** — bullet list
10. **AI core effects** — three rows with alpha/beta/gamma icons
11. **Improvement bonus** — single line (see §6)
12. **Notes** — optional; omit entirely if there's nothing unique to call out
13. **Pather interest** — single line with yellow number

## 4. Where each value comes from

Most data comes from two files in the TASC mod folder:

- **`data/campaign/industries.csv`** — find the row by `id` (e.g. `BOGGLED_HYDROPONICS`). Columns are:
  `id, name, cost mult, build time, income, upkeep, downgrade, upgrade, tags, data, image, plugin, desc, order, disruptDanger`
- **`src/boggled/campaign/econ/industries/Boggled_<Name>.java`** — defines runtime behavior (supply/demand, AI core overrides, pather interest, improvement bonus, etc.).

Note that a single Java file can back multiple docs pages. Some buildings switch their name, description, costs, and effects based on the planet type they're built on (e.g. `Boggled_Domed_Cities.java` powers Domed Cities, Seafloor Cities, and Sky Cities — it branches on `this.getCurrentName()` inside `apply()`, `getBuildCost()`, `getBaseUpkeep()`, `getDescriptionOverride()`, and `getCurrentImage()`). When documenting a variant, read the Java file carefully for these per-variant branches rather than assuming the variant matches the base building.

Mapping table:

| Page field            | Source                                                                                                                                       |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Flavor text (italic)  | `desc` column of `industries.csv` — copy verbatim                                                                                            |
| Build cost (¢)        | `cost mult` column × **5,000** (e.g. cost mult `50` → `250,000¢`)                                                                            |
| Monthly upkeep base   | `upkeep` column × **500** (e.g. upkeep `3` → `1,500¢`); always followed by ` * (colony size - 2)`                                            |
| Enabled by default    | `data/config/LunaSettings.csv` — find the matching `boggled<Name>Enabled` row and use its default Boolean (`True` → Yes green, `False` → No red + LunaLib note) |
| Supply / Demand items | Java file's `apply()` method — look for `this.supply(...)` and `this.demand(...)` calls                                                      |
| Conditional demand    | `if (!this.market.hasCondition(...))` guards in `apply()` (e.g. organics demand only on non-habitable worlds)                                |
| Effects bullets       | Behavior in `apply()` (e.g. `applyDeficitToProduction(...)`) and any other custom logic                                                      |
| AI core effects       | See §7                                                                                                                                       |
| Improvement bonus     | See §6                                                                                                                                       |
| Pather interest       | See §8                                                                                                                                       |
| Notes                 | Anything genuinely unique that doesn't fit into the sections above (variants per planet type, special build prerequisites, etc.)             |

## 5. Supply and Demand section format

Use commodity icons, **not** the commodity name as text. The icons live under `public/images/commodities/` (e.g. `food.png`, `heavymachinery.png`, `organics.png`).

For each supplied or demanded commodity:

- A `flex items-center gap-2` row containing:
  - A `<Link>` to the commodity's Starsector wiki page wrapping a `<img>` of the commodity icon at `className="h-10 w-10"`.
  - A `<span>` with the plain quantity text (e.g. `colony size`, `colony size - 2`). **Do not** wrap the quantity in the yellow highlight color — the quantity stays default text color.
  - Any conditional/qualifier note as `<span className="italic opacity-60">(not demanded on habitable worlds)</span>` appended after the quantity.

The whole list lives inside `<div className="flex flex-col gap-2 pl-4">` under a `Supply:` / `Demand:` label.

If a building has no supply or demand, write `<span className="italic opacity-60">(none)</span>` after the label, matching how Domed Cities and Planetary Agrav Field do it.

## 6. Improvement bonus

Look at the Java file for an override of `canImproveToIncreaseProduction()`:

```java
@Override
protected boolean canImproveToIncreaseProduction() {
    return true;
}
```

- If it returns `true` (as in Hydroponics), the building gains `+1` to its primary supplied commodity when improved. Add a single line **between AI core effects and Pather interest**:
  ```tsx
  <div><Link href="https://starsector.wiki.gg/wiki/Industry#Upgrading" style={{ color: 'rgb(5, 250, 250)' }}>Improvement bonus</Link>: Increases <Link href="https://starsector.wiki.gg/wiki/<commodity>" style={{ color: 'rgb(5, 250, 250)' }}>commodity</Link> production by <span style={{ color: 'rgb(255, 210, 0)' }}>1</span>.</div>
  ```
- If the method is not overridden, or some custom logic in `apply()` adds a different bonus when `isImproved()` is true, describe whatever the Java code actually does.
- If the building cannot be improved at all and there's no improvement-related logic, just put muted "(none)" for the improvement bonus, using Planetary Agrav Field as an example.

Always read the Java file before writing this section — different buildings handle improvement differently and there's no shortcut.

## 7. AI core effects

Check the Java file for any of these methods:

- `apply()` branches on `this.aiCoreId` (e.g. `"alpha_core".equals(this.aiCoreId)`)
- Overrides of `addAlphaCoreDescription`, `addBetaCoreDescription`, `addGammaCoreDescription`
- Overrides of `applyAlphaCoreModifiers` / `applyBetaCoreModifiers` / `applyGammaCoreModifiers`

If any of those exist, document exactly what they do (Domed Cities is an example: alpha = +3 stability, beta = +2, gamma = +1).

If none of them are overridden (as with Hydroponics), the building uses the standard `BaseIndustry` defaults:

- **Alpha core**: production +1 for the primary commodity, demand reduced by 1, upkeep reduced by 25%
- **Beta core**: demand reduced by 1, upkeep reduced by 25%
- **Gamma core**: demand reduced by 1

If the building disables AI cores entirely (e.g. Planetary Agrav Field), show all three rows with `<span className="italic opacity-60">(cannot install)</span>`.

Each AI core row uses the same flex row + 10×10 icon pattern; see [Hydroponics.tsx](../app/components/terraforming/buildings/Hydroponics.tsx) for the canonical layout.

## 8. Pather interest

In the Java file, look for an override:

```java
@Override
public float getPatherInterest() { return super.getPatherInterest() + 2.0f; }
```

- If the building adds a value via `super.getPatherInterest() + N.0f`, display `N` (e.g. Domed Cities and Planetary Agrav Field add `2`).
- If `getPatherInterest()` is not overridden (as with Hydroponics), display `0`.

## 9. Notes section guidance

Only include the Notes section when the building has unique behavior that doesn't fit anywhere else. Examples worth mentioning:

- The building has variants on different planet types (e.g. Domed Cities → Sky Cities on gas giants, Seafloor Cities on water worlds).
- It cannot be built when certain market conditions are present, or has special prerequisites (e.g. requires Domed Cities).
- Player-configurable behavior backed by an external CSV.

If everything important is already covered by Supply, Demand, Effects, AI core, Improvement bonus, and Pather interest, **omit the Notes section entirely** rather than padding it with restatements.

## 10. Verification

After creating the files:

1. Run the dev server (`npm run dev`).
2. Open `/docs/<slug>` in a browser.
3. Confirm the page renders with banner + navigation + content + footer and matches the visual layout of `/docs/hydroponics`.
4. Resize the window to confirm the layout still wraps cleanly at narrow widths.
5. Click each external wiki link and check the commodity / AI core icons resolve.
6. Spot-check that the building icon shows with the cyan border and that the italic flavor text renders.
