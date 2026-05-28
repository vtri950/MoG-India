# Contributing to MoG-India

Thanks for helping build the most comprehensive public map of Indian governance. This guide covers everything you need to add or improve data.

## Quick start

```bash
git clone <repo>
cd MoG-India
npm install
npm run dev   # http://localhost:5173
```

## Adding a government element

Elements live in:

| File | What goes there |
|------|-----------------|
| `src/data/elements.ts` | Union-level elements (ministries, constitutional bodies, PSUs, officials) |
| `src/data/stateElements.ts` | State government structures |
| `src/data/localGovtElements.ts` | Panchayats, municipalities, local bodies |

### Minimal element

```typescript
{
  id: 'ministry-jal-shakti',              // kebab-case, globally unique
  name: 'Ministry of Jal Shakti',
  category: 'ministry',
  subtype: 'union-ministry',
  description: 'Responsible for water resources, river development, and Ganga rejuvenation.',
  parentIds: ['cabinet-minister-jal-shakti'],
  legalBasis: 'Government of India (Allocation of Business) Rules 1961',
  infoUrl: 'https://jalshakti-dowr.gov.in',
}
```

### Full element (all fields)

```typescript
{
  id: 'sebi',
  name: 'Securities and Exchange Board of India',
  nameHindi: 'भारतीय प्रतिभूति और विनिमय बोर्ड',
  abbreviation: 'SEBI',
  category: 'body',
  subtype: 'regulatory-authority',
  description: 'Regulates securities markets and protects investor interests.',
  role: 'Chairperson',
  currentHolder: 'Madhabi Puri Buch',
  parentIds: ['ministry-finance'],
  secondaryParentIds: ['parliament'],     // oversight/advisory link (dashed edge)
  tags: ['regulator', 'finance'],
  jurisdictions: [{ type: 'all-india' }],
  legalBasis: 'SEBI Act, 1992',
  infoUrl: 'https://sebi.gov.in',
  headquarters: 'Mumbai',
  establishedYear: 1992,
}
```

### Rules

- `id` must be globally unique across all data files — check for clashes before adding
- `parentIds` must reference IDs that already exist; missing parents break graph layout
- Use `secondaryParentIds` for oversight or advisory relationships (renders as dashed edge)
- `tags` must be IDs from `tagDefinitions` in `elements.ts`
- Set `jurisdictions` to `[{ type: 'all-india' }]` for bodies with nationwide scope
- Run `npm run lint` before committing — TypeScript will catch type mismatches

## Adding powers data (`src/data/powers.ts`)

Sources: Constitution of India, relevant Acts, [Allocation of Business Rules](https://cabsec.gov.in/allocation-of-business-rules/).

```typescript
{
  elementId: 'ministry-finance',
  lastReviewed: '2025-01-01',            // ISO date you last verified this
  powers: [
    {
      id: 'mof-budget',                  // unique within the profile
      title: 'Preparation of Union Budget',
      description: 'Responsible for preparing the annual Union Budget under Article 112.',
      powerType: 'function',             // 'power' | 'duty' | 'function' | 'responsibility'
      inForceFrom: '1950-01-26',
      sources: [
        {
          type: 'constitution',
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

## Adding budget data (`src/data/budgets.ts`)

All amounts in **₹ Crore**. Source from [indiabudget.gov.in](https://www.indiabudget.gov.in) — use Expenditure Budget Vol. 1 for ministry-wise breakdowns.

```typescript
{
  elementId: 'ministry-health',
  fiscalYear: '2024-25',
  budgetEstimate: 89155,
  revisedEstimate: 87200,               // omit if not yet available
  actuals: undefined,                   // fill once actuals are published
  breakdown: [
    { category: 'revenue-expenditure', amount: 72000, description: 'NHM, PMJAY, Health schemes' },
    { category: 'capital-expenditure', amount: 17155, description: 'AIIMS, capital health infra' },
  ],
  source: 'Union Budget 2024-25, Demand for Grants No. 42-43',
}
```

## Adding staff data (`src/data/staffing.ts`)

Sources: [DoPT Annual Report](https://dopt.gov.in), individual ministry annual reports.

```typescript
{
  elementId: 'ministry-health',
  asOfDate: '2024-03-31',
  totalStrength: 3200,
  sanctionedStrength: 3600,
  gradeBreakdown: [
    { grade: 'group-a', count: 380 },
    { grade: 'group-b', count: 820 },
    { grade: 'group-c', count: 2000 },
  ],
  source: 'DoPT Annual Report 2023-24',
}
```

## Code style

- TypeScript strict mode is enforced — no `any` without justification
- No new external dependencies without discussion
- Component-scoped CSS (each component has its own `.css` file)
- No comments explaining *what* code does — only comment *why* when non-obvious

## Pull request checklist

- [ ] `npm run lint` passes with zero warnings
- [ ] `npm run build` completes without errors
- [ ] New element IDs don't collide with existing ones
- [ ] `parentIds` references exist
- [ ] Data includes a `source` field citing the official document

## Accuracy standards

- Use official names from government websites (not press shorthand)
- Include `legalBasis` for all bodies — this is the Act or constitutional article that created them
- Include `infoUrl` pointing to the official government website
- If data is uncertain, note it in `description` rather than omitting the element
- `currentHolder` for officials changes — PRs updating this are always welcome

## Questions?

Open an issue or start a discussion on GitHub.
