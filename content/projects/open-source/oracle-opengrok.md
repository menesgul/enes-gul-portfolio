---
title: Oracle OpenGrok
slug: oracle-opengrok
description: Bazaar repository test contribution work for Oracle OpenGrok.
github: https://github.com/oracle/opengrok
branch: https://github.com/menesgul/opengrok/tree/5035-bazaar-tests
issue: https://github.com/oracle/opengrok/issues/5035
pullRequest: https://github.com/oracle/opengrok/pull/5039
status: Open PR
year: "2026"
technologies:
  - Java
  - JUnit 5
  - Maven
  - Bazaar/Breezy
topics:
  - Open source
  - Developer tooling
---

## Overview

Issue #5035 asked for Bazaar repository tests to run bzr instead of only parsing hand-written strings. This contribution moves the coverage closer to the real repository workflow and is currently an open PR awaiting maintainer workflow approval.

## Contribution

- Used the TestRepository fixture.
- Exercised file history through BazaarRepository.
- Exercised directory history through BazaarRepository.
- Exercised annotation through BazaarRepository.annotate().
- Kept parser-only regression coverage where useful.
- Used @EnabledForRepository(BAZAAR).
- Cleaned up temporary repository state.

## Testing

- Command: ./mvnw -pl opengrok-indexer -Dtest=BazaarHistoryParserTest,BazaarRepositoryTest test
- 7 tests run.
- 0 failures, 0 errors and 0 skipped tests.

## Lessons learned

- Parser unit tests and repository/integration tests validate different behavior.
- External CLI-dependent tests need deterministic fixtures.
- Setup, cleanup and isolation are essential for repository tests.
- Environment-aware tests keep repository-specific coverage reliable.
- Open-source contribution flow: issue → branch → PR → OCA → maintainer approval.
