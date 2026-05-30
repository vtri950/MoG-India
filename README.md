# Machinery of Government — India 🇮🇳

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Version](https://img.shields.io/badge/version-0.0.1-blue.svg)](package.json)
[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)](https://vitejs.dev)

Interactive visualization of the Indian Government — ministries, departments, constitutional bodies, regulators, tribunals, and PSUs, and how they oversee one another.

> **Live demo:** [vtri950.github.io/MoG-India](https://vtri950.github.io/MoG-India/)

## What it shows

The Indian state is modelled as a network of **elements** (officials, ministries, bodies, groups) connected by **oversight relationships**. Distance from the President roughly corresponds to constitutional remoteness.

```mermaid
%%{init: {'theme':'base', 'themeVariables': {'primaryColor':'#eef2ff','primaryTextColor':'#1a1a1a','primaryBorderColor':'#6366f1','lineColor':'#64748b','textColor':'#1a1a1a','fontSize':'14px'}}}%%
graph TD
  P[Ring 0 — President]
  VP[Ring 1 — Vice President]
  PM[Ring 1 — Prime Minister]
  CM[Ring 2 — Cabinet Ministers]
  UM[Ring 3 — Union Ministries]
  D[Ring 4 — Departments / Agencies]
  B[Ring 5+ — Bodies / PSUs / Tribunals]

  P --> VP
  P --> PM
  PM --> CM
  CM --> UM
  UM --> D
  D --> B
```

Two views render this network:

- **Full view** — every element placed in concentric rings (Cytoscape).
- **Focus view** — the selected element at the centre, with parents and children radiating outward.

## Features

- Click any node to open its **details pane** (Info and Powers tabs)
- **Info tab** — description, legal basis, headquarters, established year, current officeholder, and reports-to / oversees / oversight-and-advisory relationships
- **Powers tab** — constitutional powers, statutory duties, and functions with cited sources (Constitution articles & Acts), for **every** element
- **Search** by name, abbreviation, or tag
- **Filter** by category, jurisdiction (Union / State / UT), or tag
- **Random element** button (⚄) for serendipitous browsing
- **Dark / light** theme
- **Legend** and **territory filter** popovers

> Powers data covers all 370 elements: hand-written for officials, ministries, and major bodies (from specific Acts & constitutional articles), and templated from the Constitution and the Allocation of Business Rules for states, ministers, departments, and the long tail of bodies.

## Interacting with the graph

| Action | Result |
|--------|--------|
| **Click** a node | Selects it; opens the details pane |
| **Click** the selected node again | Switches to **Focus view** — element centred, parents and children arranged radially |
| **⊡ / ⊞** toolbar button | Toggle between Full view and Focus view |
| **↺** toolbar button | Reset selection, clear filters, re-centre graph |
| **⚄** toolbar button | Jump to a randomly selected element |
| **☰** toolbar button | Toggle the legend (node shapes + edge styles) |
| **🌍** toolbar button | Filter graph by jurisdiction (Union / State / UT) |
| Click a **tag pill** in the details pane | Opens the tag info pane — shows all elements with that tag |
| Click a **category chip** in the details pane | Opens the category info pane — shows all elements of that type |
| Click a **parent or child link** in the details pane | Navigates directly to that element |
| **Search pane** (header) | Full-text search across name, abbreviation, and description; filter by category or tag |

### Edge styles

| Style | Meaning |
|-------|---------|
| Solid line | Primary relationship — element **reports to** / is **part of** its parent |
| Dashed line | Secondary relationship — **oversight**, **advisory**, or **coordinate** link |

## Relationships

Every element has one or more parent elements, encoded as two arrays on `GovElement`:

| Field | Edge style | Meaning |
|-------|-----------|---------|
| `parentIds` | Solid | Primary hierarchy — "reports to" / "is part of" |
| `secondaryParentIds` | Dashed | Secondary link — oversight, advisory, or coordination |

The full set of `RelationshipType` values used in the data:

| Type | Example |
|------|---------|
| `reports-to` | Ministry → Cabinet Minister |
| `part-of` | Department → Ministry |
| `overseen-by` | PSU → Ministry (secondary) |
| `advises` | NITI Aayog → Prime Minister |
| `appoints` | President → Governor |
| `coordinates-with` | Inter-ministry coordination body |

In the graph, the **direction** of an edge always points from child to parent (i.e., arrows indicate "reports to", not "controls").

## Domain model

Every node is a `GovElement`. Elements carry classification (category + subtype), tags, jurisdictions, and one or more parent links.

```mermaid
%%{init: {'theme':'base', 'themeVariables': {'primaryColor':'#eef2ff','primaryTextColor':'#1a1a1a','primaryBorderColor':'#6366f1','lineColor':'#64748b','textColor':'#1a1a1a','fontSize':'14px'}}}%%
classDiagram
  class GovElement {
    +id string
    +name string
    +category ElementCategory
    +subtype ElementSubtype
    +parentIds string[]
    +secondaryParentIds string[]
    +tags string[]
    +currentHolder string
    +legalBasis string
  }
  class Jurisdiction {
    +type JurisdictionType
    +name string
  }
  class TagDefinition {
    +id string
    +category string
    +color string
  }
  class PowerProfile {
    +elementId string
    +powers Power[]
  }
  class BudgetProfile {
    +elementId string
    +fiscalYear string
    +budgetEstimate number
  }
  class StaffProfile {
    +elementId string
    +totalStrength number
    +sanctionedStrength number
  }

  GovElement "1" --> "*" Jurisdiction
  GovElement "1" --> "*" TagDefinition : tags
  GovElement "1" --> "0..1" PowerProfile
  GovElement "1" --> "0..1" BudgetProfile
  GovElement "1" --> "0..1" StaffProfile
  GovElement "1" --> "*" GovElement : parentIds
```

### Classification

| Category | Subtypes |
|----------|----------|
| **Official** | President, Vice President, PM, Cabinet Minister, MoS (IC), MoS, Deputy Minister, Governor, CM, Civil Servant, Constitutional Official |
| **Ministry** | Union Ministry, State Ministry, Department, Attached/Subordinate/Field Office |
| **Body** | Constitutional, Statutory, Regulatory, PSU, Autonomous, Tribunal, Commission, Authority, Corporation, Society, Trust, Local Body, Service Cadre |
| **Group** | Cabinet, Cabinet Committee, Council, State Legislature, Commission Group, Task Force |

### Tags

- **Type** — Regulator, PSU, Tribunal, Commission, Authority, Research/Training Institution, Advisory Body
- **Sector** — Finance, Defence, Home, External Affairs, Health, Education, Infrastructure, Agriculture, Commerce, Tech, Environment, Social Justice, Law, Energy, Transport

### Jurisdictions

```
Union (Central)
├── States (28)
└── Union Territories (8)
    ├── With Legislature (Delhi, Puducherry, J&K)
    └── Without Legislature (5)
```

## Architecture

Pure client-side React app. State lives in `App.tsx`; data is bundled at build time from static TS files in `src/data/`.

```mermaid
%%{init: {'theme':'base', 'themeVariables': {'primaryColor':'#eef2ff','primaryTextColor':'#1a1a1a','primaryBorderColor':'#6366f1','lineColor':'#64748b','textColor':'#1a1a1a','fontSize':'14px'}}}%%
flowchart LR
  subgraph Data[src/data]
    E[elements.ts]
    SE[stateElements.ts]
    LE[localGovtElements.ts]
    J[jurisdictions.ts]
    P[powers.ts]
    B[budgets.ts]
    S[staffing.ts]
  end

  subgraph App[App.tsx — state + routing]
    direction TB
    State[(viewMode, selectedId, filters, theme)]
  end

  subgraph Views[Graph views]
    FV[FullView<br/>Cytoscape concentric]
    OC[OrgChart<br/>focus / radial]
  end

  subgraph Panes[Side panes]
    H[Header]
    SP[SearchPane]
    CP[CategoriesPane]
    ED[ElementDetails]
    CI[CategoryInfo]
    TI[TagInfo]
  end

  Data --> App
  App --> Views
  App --> Panes
  Views -- onSelectElement --> App
  Panes -- onSelectElement --> App
```

### Key files

```
src/
├── App.tsx                   # State container, theme, view routing
├── components/
│   ├── FullView.tsx          # Cytoscape concentric layout
│   ├── OrgChart.tsx          # Focus / radial layout
│   ├── ElementDetails.tsx    # Info / Powers tabs
│   ├── SearchPane.tsx        # Full-text + tag search
│   ├── CategoriesPane.tsx    # Browse by category / subtype
│   ├── CategoryInfo.tsx      # Drill-down for a single category
│   ├── TagInfo.tsx           # Drill-down for a single tag
│   └── Header.tsx            # Top bar: search, categories, theme, view toggle
├── data/
│   ├── elements.ts           # Union-level elements + tag definitions
│   ├── stateElements.ts      # State governments
│   ├── localGovtElements.ts  # Panchayats, municipalities
│   ├── jurisdictions.ts      # Jurisdiction labels + hierarchy
│   ├── powers.ts             # (WIP) constitutional & statutory powers
│   ├── budgets.ts            # (WIP) BE / RE / actuals
│   └── staffing.ts           # (WIP) sanctioned vs actual strength
├── types/index.ts            # All TypeScript types
└── utils/colors.ts           # Element colour scheme
```

## Data coverage

### Current status

| Area | Done | Planned | Notes |
|------|------|---------|-------|
| **Constitutional officials** | President, VP, PM | — | Complete |
| **Cabinet Ministers** | 30 | All 52+ portfolio holders | Active cabinet only |
| **Cabinet Committees** | 3 (CCS, CCEA, CCPA) | All 8+ | Core committees done |
| **Union Ministries** | 49 | 52 | Near-complete |
| **Departments** | 44 | 90+ | Multi-department ministries mapped (Defence, Home, Finance, Health, Agriculture, S&T, Personnel, etc.) |
| **Constitutional Bodies** | 7 | ~12 | Supreme Court, EC, CAG, UPSC, Finance Commission, AG, CVC |
| **Statutory Bodies** | 8 | 50+ | Selective coverage |
| **Regulatory Authorities** | 4 | ~20 | RBI, SEBI, IRDAI, TRAI |
| **PSUs** | 12 | 350+ | Major PSUs only |
| **Autonomous Bodies** | 5 | 200+ | Selective |
| **Corporations** | 4 | 30+ | Selective |
| **Tribunals** | 3 | ~20 | NGT, NCLT, CAT |
| **State Governments** | 28 states + 3 UTs (Governor, CM, Legislature, HC, PSC each) | All 28 states + 8 UTs | Generated structure for every state & legislature UT |
| **Local Government** | Rural (Zila Parishad → Panchayat Samiti → Gram Panchayat) + Urban (Municipal Corporation → Municipality → Nagar Panchayat) | Named individual bodies | Three-tier rural & urban hierarchies, rooted under State Governments (a State subject); shown as triangles in the graph |
| **Powers data** | All 370 elements (1,105 powers) | — | `powers.ts` — hand-written for officials, ministries & major bodies; templated from the Constitution / Allocation of Business Rules for states, ministers, departments & the long tail |
| **Current officeholders** | 108 / 370 | All officials & body heads | CJI, CEC, CAG, RBI/SEBI/IRDAI/TRAI/UPSC heads, all Governors & CMs (officeholders change frequently — structure is the focus) |
| **Hindi names** | 370 / 370 | — | Complete |

**Total elements today: ~370** (Union + 31 states/UTs × 5 institutions + local government)

> Budget (`budgets.ts`) and staffing (`staffing.ts`) data files remain in the repo as scaffolds but are no longer surfaced in the UI — the details pane focuses on structure (Info) and authority (Powers).

## Stack

- **React 18** + **TypeScript** on **Vite 5**
- **Cytoscape.js** for graph layout
- **Recharts** (planned) for budget / staff charts
- Plain CSS with custom properties — no framework

## Getting started

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build to dist/
npm run preview    # serve the production build
npm run lint
```

Requires Node 18+.

<a name="deploy"></a>
### Deploy to GitHub Pages

```bash
npm run build
# Then push the dist/ folder to the gh-pages branch, or use:
npx gh-pages -d dist
```

Set the repository **Pages** source to the `gh-pages` branch in GitHub → Settings → Pages.

## Contributing

### Add an element

1. Add an entry to `src/data/elements.ts` (or `stateElements.ts` / `localGovtElements.ts`)
2. Set `parentIds` to existing element IDs — the graph relies on these for layout
3. Add `tags` from `tagDefinitions` and `jurisdictions` as appropriate
4. `npm run dev` and confirm the node renders in the right ring

### Add powers data (`src/data/powers.ts`)

```typescript
// Each ministry/body can have a PowerProfile
{
  elementId: 'ministry-finance',
  lastReviewed: '2025-01-01',
  powers: [
    {
      id: 'mof-budget-power',
      title: 'Preparation of Union Budget',
      description: 'The Ministry of Finance is responsible for preparing the annual Union Budget.',
      powerType: 'function',          // 'power' | 'duty' | 'function' | 'responsibility'
      inForceFrom: '1950-01-26',
      sources: [
        {
          type: 'constitution',       // 'constitution' | 'act' | 'rules' | 'notification' | 'convention'
          title: 'Constitution of India',
          article: 'Article 112',
          year: 1950,
          url: 'https://www.constitutionofindia.net/articles/article-112/',
        },
      ],
    },
  ],
}
```

### Add budget data (`src/data/budgets.ts`)

Amounts are in **₹ Crore**. Source from [indiabudget.gov.in](https://www.indiabudget.gov.in) — Expenditure Budget Vol. 1.

```typescript
{
  elementId: 'ministry-education',
  fiscalYear: '2024-25',
  budgetEstimate: 120000,
  revisedEstimate: 118500,
  actuals: 115200,                    // fill in once actuals are released
  breakdown: [
    { category: 'revenue-expenditure', amount: 95000, description: 'Grants to Universities & Schemes' },
    { category: 'capital-expenditure', amount: 25000, description: 'Capital outlay on institutions' },
  ],
  source: 'Union Budget 2024-25, Demand for Grants No. 58-59',
}
```

### Add staff data (`src/data/staffing.ts`)

Source from DoPT Annual Report / individual ministry annual reports.

```typescript
{
  elementId: 'ministry-education',
  asOfDate: '2024-03-31',
  totalStrength: 3850,
  sanctionedStrength: 4200,
  gradeBreakdown: [
    { grade: 'group-a', count: 420 },
    { grade: 'group-b', count: 980 },
    { grade: 'group-c', count: 2450 },
  ],
  source: 'DoPT Civil Services Survey 2024',
}
```

### Data sources

| Data | Source |
|------|--------|
| Government structure | [india.gov.in](https://india.gov.in), ministry websites |
| Budget | [indiabudget.gov.in](https://www.indiabudget.gov.in) |
| Civil service stats | DoPT Annual Reports |
| Powers | Constitution of India, Allocation of Business Rules |
| PSU list | Department of Public Enterprises |

## Data freshness

| Data type | As of | Source |
|-----------|-------|--------|
| Government structure (Union) | May 2026 | india.gov.in, ministry websites |
| Budget figures | Union Budget 2024-25 (BE/RE) | indiabudget.gov.in |
| Staff strength | 2023-24 | DoPT Annual Report, ministry annual reports |
| Constitutional powers | Current (Constitution as amended) | constitutionofindia.net, legislative.gov.in |

Government structures and ministerial portfolios change frequently. Always verify against official sources before citing.

## Browser & device support

Tested on Chrome, Firefox, and Safari (desktop). The Cytoscape graph is **mouse/trackpad optimised** — touch interactions on mobile work but are limited (no pinch-to-zoom on iOS Safari). A mobile-friendly layout is planned.

## License

MIT — see [LICENSE](LICENSE).

## Acknowledgments

Inspired by [Machinery of Government UK](https://machineryofgovernment.uk) by Harry Rushworth. Built with [Cytoscape.js](https://js.cytoscape.org/).
