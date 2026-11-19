# Awesome Automation [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> Curated list of open-source tools for automating workflows, browsers, desktops, homes, infrastructure and software tests.

## Contents

- [Workflow Automation](#workflow-automation)
  - [Low-Code Platforms](#low-code-platforms)
  - [Durable Execution and Orchestration](#durable-execution-and-orchestration)
  - [Data and Pipeline Orchestration](#data-and-pipeline-orchestration)
  - [Business Process and Job Operations](#business-process-and-job-operations)
- [Browser Automation](#browser-automation)
  - [Drivers and Libraries](#drivers-and-libraries)
  - [Browser Infrastructure](#browser-infrastructure)
  - [Browser Extensions and Recorders](#browser-extensions-and-recorders)
- [AI Agents and Computer Use](#ai-agents-and-computer-use)
  - [Browser and Web Agents](#browser-and-web-agents)
  - [Desktop and Mobile Agents](#desktop-and-mobile-agents)
  - [Agent Frameworks and Protocols](#agent-frameworks-and-protocols)
- [Web Scraping and Data Extraction](#web-scraping-and-data-extraction)
- [Desktop Automation and RPA](#desktop-automation-and-rpa)
  - [Cross-Platform](#cross-platform)
  - [Windows](#windows)
  - [macOS and Linux](#macos-and-linux)
- [Home Automation](#home-automation)
  - [Platforms](#platforms)
  - [Devices and Protocols](#devices-and-protocols)
  - [Add-Ons and Tooling](#add-ons-and-tooling)
- [Test Automation](#test-automation)
  - [End-to-End and Web Testing](#end-to-end-and-web-testing)
  - [Mobile Testing](#mobile-testing)
  - [Unit and BDD Frameworks](#unit-and-bdd-frameworks)
  - [API Testing and Mocking](#api-testing-and-mocking)
  - [Load and Performance Testing](#load-and-performance-testing)
  - [Visual Regression Testing](#visual-regression-testing)
  - [Accessibility Testing](#accessibility-testing)
  - [Mutation, Property-Based and Fuzz Testing](#mutation-property-based-and-fuzz-testing)
  - [Test Data and Environments](#test-data-and-environments)
  - [Reporting and Test Management](#reporting-and-test-management)
  - [Security Testing](#security-testing)
  - [Chaos Engineering](#chaos-engineering)
  - [AI-Assisted Testing](#ai-assisted-testing)
- [CI/CD and Release Automation](#cicd-and-release-automation)
  - [Pipelines](#pipelines)
  - [GitHub Actions Tooling](#github-actions-tooling)
  - [Releases and Dependencies](#releases-and-dependencies)
- [Infrastructure and Configuration Automation](#infrastructure-and-configuration-automation)
- [Scripting and Developer Workflow](#scripting-and-developer-workflow)
  - [Task Runners and Shells](#task-runners-and-shells)
  - [Scheduling and Watching](#scheduling-and-watching)
  - [Git Hooks and Code Quality](#git-hooks-and-code-quality)
  - [Terminal Interaction](#terminal-interaction)
- [Learning Resources](#learning-resources)
  - [Guides and Courses](#guides-and-courses)
  - [Example Projects](#example-projects)
- [Related Lists](#related-lists)
- [Contributing](#contributing)
- [License](#license)

## Workflow Automation

_Engines and platforms that connect services, schedule jobs and orchestrate multi-step processes._

### Low-Code Platforms

- [Activepieces](https://github.com/activepieces/activepieces) - Open-source no-code automation with a typed pieces framework and AI agent support.
- [Automatisch](https://github.com/automatisch/automatisch) - Self-hosted open-source alternative to Zapier for business automation.
- [Huginn](https://github.com/huginn/huginn) - Agents that monitor the web and act on a user's behalf.
- [n8n](https://github.com/n8n-io/n8n) - Fair-code workflow automation with a visual editor and more than 400 integrations.
- [Node-RED](https://github.com/node-red/node-red) - Flow-based programming tool for wiring together devices, APIs and online services.
- [Pipedream](https://github.com/PipedreamHQ/pipedream) - Event-driven workflows with a large library of open-source integration components.
- [StackStorm](https://github.com/StackStorm/st2) - Event-driven automation platform for remediation, deployment and ChatOps.

### Durable Execution and Orchestration

_Code-first engines that keep workflow state across failures and restarts._

- [Cadence](https://github.com/cadence-workflow/cadence) - Fault-tolerant stateful code platform originally built at Uber.
- [Conductor](https://github.com/conductor-oss/conductor) - Microservice orchestration engine with JSON-defined workflows, originally from Netflix.
- [Hatchet](https://github.com/hatchet-dev/hatchet) - Background task orchestration platform with queues, DAGs and durable workflows.
- [Inngest](https://github.com/inngest/inngest) - Event-driven durable functions and queues for any language.
- [Restate](https://github.com/restatedev/restate) - Durable execution runtime for services, workflows and event handlers.
- [Temporal](https://github.com/temporalio/temporal) - Durable execution platform for writing reliable workflows as code.
- [Trigger.dev](https://github.com/triggerdotdev/trigger.dev) - Open-source platform for long-running background jobs and AI workflows in TypeScript.
- [Windmill](https://github.com/windmill-labs/windmill) - Scripts, flows and internal apps in Python, TypeScript, Go and more, run on a fast worker engine.

### Data and Pipeline Orchestration

- [Apache Airflow](https://github.com/apache/airflow) - Platform to author, schedule and monitor data workflows defined as Python code.
- [Apache DolphinScheduler](https://github.com/apache/dolphinscheduler) - Distributed visual workflow scheduler for data pipelines.
- [Argo Workflows](https://github.com/argoproj/argo-workflows) - Container-native workflow engine for Kubernetes.
- [Dagster](https://github.com/dagster-io/dagster) - Asset-based orchestrator for data and machine-learning pipelines.
- [Kestra](https://github.com/kestra-io/kestra) - Declarative YAML orchestration platform for scheduled and event-driven workflows.
- [Luigi](https://github.com/spotify/luigi) - Python module for building complex batch job pipelines with dependency resolution.
- [Prefect](https://github.com/PrefectHQ/prefect) - Python workflow orchestration with retries, scheduling and observability.

### Business Process and Job Operations

- [BullMQ](https://github.com/taskforcesh/bullmq) - Redis-backed message queue and job scheduler for Node.js.
- [Camunda](https://github.com/camunda/camunda) - Process orchestration platform based on BPMN and DMN.
- [Celery](https://github.com/celery/celery) - Distributed task queue for Python.
- [Rundeck](https://github.com/rundeck/rundeck) - Runbook automation and job scheduler for operations teams.
- [Serverless Workflow Specification](https://github.com/open-workflow-specification/specification) - Vendor-neutral DSL for defining workflows.

## Browser Automation

_Drivers and libraries that control real browsers from code._

### Drivers and Libraries

- [chromedp](https://github.com/chromedp/chromedp) - Go package for driving Chrome through the DevTools Protocol.
- [Playwright](https://github.com/microsoft/playwright) - Cross-browser automation library and test runner for Chromium, Firefox and WebKit with APIs for several languages.
- [Puppeteer](https://github.com/puppeteer/puppeteer) - Node.js library for controlling Chrome and Firefox over the DevTools Protocol and WebDriver BiDi.
- [Rod](https://github.com/go-rod/rod) - DevTools Protocol driver for Go aimed at web automation and scraping.
- [Selenium](https://github.com/SeleniumHQ/selenium) - Browser automation framework and WebDriver implementation with bindings for many languages.
- [Splinter](https://github.com/cobrateam/splinter) - Python abstraction layer over several browser drivers.
- [Taiko](https://github.com/getgauge/taiko) - Node.js library with a readable API for automating Chromium-based browsers.
- [WebdriverIO](https://github.com/webdriverio/webdriverio) - Browser and mobile automation framework for Node.js using WebDriver and WebDriver BiDi.

### Browser Infrastructure

- [Browserless](https://github.com/browserless/browserless) - Headless browser service with REST and WebSocket APIs.
- [docker-selenium](https://github.com/SeleniumHQ/docker-selenium) - Official Docker images for running Selenium Grid and browsers.
- [Lightpanda](https://github.com/lightpanda-io/browser) - Headless browser written in Zig and designed for automation and AI agents.
- [Steel Browser](https://github.com/steel-dev/steel-browser) - Open-source browser API for AI agents and web automation.

### Browser Extensions and Recorders

- [Automa](https://github.com/AutomaApp/automa) - Browser extension for automating tasks with a visual workflow builder.
- [Chrome DevTools MCP](https://github.com/ChromeDevTools/chrome-devtools-mcp) - MCP server that lets coding agents control and inspect a live Chrome browser.
- [Playwright MCP](https://github.com/microsoft/playwright-mcp) - MCP server exposing Playwright browser automation to language models.
- [shot-scraper](https://github.com/simonw/shot-scraper) - Command-line utility for taking automated screenshots of websites.

## AI Agents and Computer Use

_Agents that operate browsers, desktops and devices on a user's behalf._

### Browser and Web Agents

- [Browser Use](https://github.com/browser-use/browser-use) - Python library that makes websites accessible to AI agents.
- [Maxun](https://github.com/getmaxun/maxun) - No-code web data extraction platform that records robots from user actions.
- [Page Agent](https://github.com/alibaba/page-agent) - JavaScript in-page GUI agent that controls a web interface with natural language.
- [Skyvern](https://github.com/Skyvern-AI/skyvern) - Browser workflow automation driven by LLMs and computer vision.
- [Stagehand](https://github.com/browserbase/stagehand) - SDK that mixes natural-language actions with Playwright code.
- [Workflow Use](https://github.com/browser-use/workflow-use) - Records browser workflows and replays them deterministically with self-healing.

### Desktop and Mobile Agents

- [Agent S](https://github.com/simular-ai/Agent-S) - Open agentic framework that uses computers like a human.
- [Mobile MCP](https://github.com/mobile-next/mobile-mcp) - MCP server for automating iOS and Android devices, simulators and emulators.

### Agent Frameworks and Protocols

- [AutoGen](https://github.com/microsoft/autogen) - Framework for building multi-agent AI applications.
- [Composio](https://github.com/ComposioHQ/composio) - Tool and integration layer that connects agents to external applications.
- [CrewAI](https://github.com/crewAIInc/crewAI) - Framework for orchestrating role-playing autonomous agents.
- [Langflow](https://github.com/langflow-ai/langflow) - Visual framework for building and deploying agent and RAG workflows.
- [LangGraph](https://github.com/langchain-ai/langgraph) - Library for building stateful, long-running agents as graphs.
- [Mastra](https://github.com/mastra-ai/mastra) - TypeScript framework for agents, workflows and retrieval.
- [Model Context Protocol Servers](https://github.com/modelcontextprotocol/servers) - Reference implementations of MCP servers for common tools and data sources.
- [OpenAI Agents SDK](https://github.com/openai/openai-agents-python) - Lightweight Python framework for multi-agent workflows.
- [OpenHands](https://github.com/OpenHands/OpenHands) - Platform for software-development agents that write code, run commands and browse the web.

## Web Scraping and Data Extraction

- [changedetection.io](https://github.com/dgtlmoon/changedetection.io) - Self-hosted website change detection and monitoring.
- [Cheerio](https://github.com/cheeriojs/cheerio) - Fast jQuery-like HTML parsing and manipulation for Node.js.
- [Colly](https://github.com/gocolly/colly) - Fast and elegant scraping framework for Go.
- [Crawl4AI](https://github.com/unclecode/crawl4ai) - Open-source crawler that produces LLM-ready Markdown.
- [Crawlee](https://github.com/apify/crawlee) - Web scraping and browser automation library for Node.js and Python.
- [EasySpider](https://github.com/NaiboWang/EasySpider) - Visual no-code web crawler and browser automation tool.
- [Firecrawl](https://github.com/firecrawl/firecrawl) - API that turns websites into clean Markdown or structured data.
- [Scrapegraph-ai](https://github.com/ScrapeGraphAI/Scrapegraph-ai) - Python scraper that builds scraping pipelines with LLMs and graph logic.
- [Scrapling](https://github.com/D4Vinci/Scrapling) - Adaptive Python scraping framework that survives website changes.
- [Scrapy](https://github.com/scrapy/scrapy) - Fast high-level crawling and scraping framework for Python.

## Desktop Automation and RPA

_Tools for automating graphical applications, keyboards and operating systems._

### Cross-Platform

- [Airtest](https://github.com/AirtestProject/Airtest) - Image-recognition based UI automation for games and apps on several platforms.
- [Robot Framework](https://github.com/robotframework/robotframework) - Generic keyword-driven automation framework for testing and RPA.
- [RobotGo](https://github.com/go-vgo/robotgo) - Go library for native keyboard, mouse, screen and window control.
- [RPA for Python](https://github.com/tebelorg/RPA-Python) - Python package for robotic process automation built on TagUI.
- [TagUI](https://github.com/aisingapore/TagUI) - Command-line RPA tool with a natural-language scripting syntax.

### Windows

- [AutoHotkey](https://github.com/AutoHotkey/AutoHotkey) - Scripting language for hotkeys, macros and Windows automation.
- [FlaUI](https://github.com/FlaUI/FlaUI) - Library for automating Windows applications on .NET through UI Automation.
- [pywinauto](https://github.com/pywinauto/pywinauto) - Python modules for automating Microsoft Windows GUI applications.
- [WinAppDriver](https://github.com/microsoft/WinAppDriver) - WebDriver server for testing Windows desktop applications.

### macOS and Linux

- [AutoKey](https://github.com/autokey/autokey) - Desktop automation utility for Linux and X11.
- [Hammerspoon](https://github.com/Hammerspoon/hammerspoon) - Lua-based macOS automation tool with bridges to system APIs.
- [Karabiner-Elements](https://github.com/pqrs-org/Karabiner-Elements) - Powerful keyboard customizer for macOS.
- [xdotool](https://github.com/jordansissel/xdotool) - Command-line X11 automation tool for keyboard input and window control.

## Home Automation

_Platforms and tools for controlling smart homes locally._

### Platforms

- [Domoticz](https://github.com/domoticz/domoticz) - Lightweight home automation system for lights, sensors and meters.
- [Home Assistant](https://github.com/home-assistant/core) - Open-source home automation that puts local control and privacy first.
- [ioBroker](https://github.com/ioBroker/ioBroker.js-controller) - Integration platform for the Internet of Things and smart homes.
- [openHAB](https://github.com/openhab/openhab-core) - Vendor-neutral home automation platform core.

### Devices and Protocols

- [ESPHome](https://github.com/esphome/esphome) - Configures ESP8266 and ESP32 devices with YAML and connects them to home automation systems.
- [Homebridge](https://github.com/homebridge/homebridge) - Lightweight server that emulates the HomeKit API for unsupported devices.
- [Matter SDK](https://github.com/project-chip/connectedhomeip) - Open-source reference implementation of the Matter smart home standard.
- [Mosquitto](https://github.com/eclipse-mosquitto/mosquitto) - Open-source MQTT broker.
- [Tasmota](https://github.com/arendst/Tasmota) - Alternative firmware for ESP8266 and ESP32 based devices with local control.
- [Z-Wave JS UI](https://github.com/zwave-js/zwave-js-ui) - Full-featured Z-Wave control panel and MQTT gateway.
- [Zigbee2MQTT](https://github.com/Koenkk/zigbee2mqtt) - Zigbee-to-MQTT bridge that works without vendor gateways.

### Add-Ons and Tooling

- [AppDaemon](https://github.com/AppDaemon/appdaemon) - Python apps for writing Home Assistant and MQTT automations.
- [evcc](https://github.com/evcc-io/evcc) - Sun-powered electric vehicle charging controller.
- [Frigate](https://github.com/blakeblackshear/frigate) - Network video recorder with local AI object detection.
- [HACS](https://github.com/hacs/integration) - Community store for custom Home Assistant integrations and themes.
- [Home Assistant MCP Server](https://github.com/homeassistant-ai/ha-mcp) - MCP server that lets AI assistants control Home Assistant.
- [Music Assistant](https://github.com/music-assistant/server) - Music library manager that streams to many types of players.

## Test Automation

_Everything for automating software tests, grouped by purpose._

### End-to-End and Web Testing

_Playwright, Selenium and WebdriverIO also work as test runners; they are listed under Browser Automation._

- [Capybara](https://github.com/teamcapybara/capybara) - Acceptance test framework for web applications in Ruby.
- [CodeceptJS](https://github.com/codeceptjs/CodeceptJS) - Scenario-driven testing framework with helpers for Playwright, Puppeteer and WebDriver.
- [Cypress](https://github.com/cypress-io/cypress) - Browser testing framework that runs tests inside the browser.
- [Nightwatch.js](https://github.com/nightwatchjs/nightwatch) - Integrated end-to-end testing framework for Node.js.
- [Selenide](https://github.com/selenide/selenide) - Concise Java library for stable UI tests on top of Selenium.
- [SeleniumBase](https://github.com/seleniumbase/SeleniumBase) - Python framework for browser automation and end-to-end testing.
- [Serenity BDD](https://github.com/serenity-bdd/serenity-core) - Library for writing readable acceptance tests with rich reports.
- [TestCafe](https://github.com/DevExpress/testcafe) - Node.js end-to-end testing tool that needs no WebDriver.
- [Testplane](https://github.com/gemini-testing/testplane) - Browser test runner built on WebdriverIO with a focus on stability.

### Mobile Testing

- [Appium](https://github.com/appium/appium) - Cross-platform UI automation framework for mobile, desktop and other apps.
- [Appium Inspector](https://github.com/appium/appium-inspector) - GUI for inspecting application elements and recording Appium sessions.
- [Detox](https://github.com/wix/Detox) - Gray-box end-to-end testing and automation framework for React Native.
- [Maestro](https://github.com/mobile-dev-inc/maestro) - Declarative UI testing for mobile and web using simple YAML flows.
- [Patrol](https://github.com/leancodepl/patrol) - Flutter-first UI testing framework with native automation support.
- [Robolectric](https://github.com/robolectric/robolectric) - Unit-testing framework that runs Android tests on the JVM.
- [uiautomator2](https://github.com/openatx/uiautomator2) - Python wrapper for Android UI automation.

### Unit and BDD Frameworks

#### JavaScript and TypeScript

- [AVA](https://github.com/avajs/ava) - Concurrent test runner for Node.js with minimal syntax.
- [Jasmine](https://github.com/jasmine/jasmine) - Behavior-driven testing framework for JavaScript.
- [Jest](https://github.com/jestjs/jest) - JavaScript testing framework with a focus on simplicity.
- [Mocha](https://github.com/mochajs/mocha) - Feature-rich test framework for Node.js and the browser.
- [Sinon.JS](https://github.com/sinonjs/sinon) - Standalone test spies, stubs and mocks for JavaScript.
- [Testing Library](https://github.com/testing-library/dom-testing-library) - Simple utilities for testing UI components the way users interact with them.
- [Vitest](https://github.com/vitest-dev/vitest) - Vite-native test framework compatible with the Jest API.

#### Python

- [Behave](https://github.com/behave/behave) - Behavior-driven development framework for Python.
- [nox](https://github.com/wntrblm/nox) - Flexible test automation tool configured in Python.
- [pytest](https://github.com/pytest-dev/pytest) - Framework that makes it easy to write small, readable tests and scales to complex ones.
- [pytest-bdd](https://github.com/pytest-dev/pytest-bdd) - BDD library for the pytest runner.
- [pytest-xdist](https://github.com/pytest-dev/pytest-xdist) - Plugin for running tests in parallel and distributing them across machines.
- [tox](https://github.com/tox-dev/tox) - Generic virtual environment management and test command line tool.

#### Java and Kotlin

- [AssertJ](https://github.com/assertj/assertj) - Fluent assertions library for Java.
- [Awaitility](https://github.com/awaitility/awaitility) - DSL for testing asynchronous systems in Java.
- [Cucumber JVM](https://github.com/cucumber/cucumber-jvm) - Cucumber implementation for the JVM.
- [JUnit 5](https://github.com/junit-team/junit-framework) - Programmer-friendly testing framework for Java and the JVM.
- [Karate](https://github.com/karatelabs/karate) - Open-source tool that combines API, UI and performance testing in one DSL.
- [Kotest](https://github.com/kotest/kotest) - Flexible multiplatform test framework for Kotlin.
- [Mockito](https://github.com/mockito/mockito) - Mocking framework for Java unit tests.
- [MockK](https://github.com/mockk/mockk) - Mocking library for Kotlin.
- [REST Assured](https://github.com/rest-assured/rest-assured) - Java DSL for testing and validating REST services.
- [Spock](https://github.com/spockframework/spock) - Specification framework for Java and Groovy.
- [TestNG](https://github.com/testng-team/testng) - Testing framework inspired by JUnit and NUnit with extra annotations and configuration.

#### Ruby

- [Cucumber Ruby](https://github.com/cucumber/cucumber-ruby) - Cucumber implementation for Ruby.
- [FactoryBot](https://github.com/thoughtbot/factory_bot) - Fixtures replacement that builds test objects from factories.
- [Minitest](https://github.com/minitest/minitest) - Small and fast unit testing framework in the Ruby standard distribution.
- [RSpec](https://github.com/rspec/rspec) - Behavior-driven development framework for Ruby.

#### .NET

- [bUnit](https://github.com/bUnit-dev/bUnit) - Testing library for Blazor components.
- [FluentAssertions](https://github.com/fluentassertions/fluentassertions) - Extension methods for writing readable assertions in .NET tests.
- [NSubstitute](https://github.com/nsubstitute/NSubstitute) - Friendly substitute for .NET mocking libraries.
- [NUnit](https://github.com/nunit/nunit) - Unit-testing framework for all .NET languages.
- [Reqnroll](https://github.com/reqnroll/Reqnroll) - Open-source BDD framework for .NET.
- [Verify](https://github.com/VerifyTests/Verify) - Snapshot testing tool for .NET.
- [xUnit.net](https://github.com/xunit/xunit) - Free community-focused unit testing tool for .NET.

#### PHP

- [Behat](https://github.com/Behat/Behat) - Behavior-driven development framework for PHP.
- [Codeception](https://github.com/Codeception/Codeception) - Full-stack testing framework for PHP covering unit, functional and acceptance tests.
- [Mockery](https://github.com/mockery/mockery) - Mock object framework for PHP.
- [Pest](https://github.com/pestphp/pest) - Elegant PHP testing framework with a focus on simplicity.
- [PHPUnit](https://github.com/sebastianbergmann/phpunit) - De facto standard unit testing framework for PHP.

#### Go

- [Ginkgo](https://github.com/onsi/ginkgo) - Behavior-driven testing framework for Go.
- [godog](https://github.com/cucumber/godog) - Cucumber for Go.
- [GoMock](https://github.com/uber-go/mock) - Mocking framework for the Go programming language.
- [gotestsum](https://github.com/gotestyourself/gotestsum) - Test runner with readable output and JUnit XML reports for Go.
- [Testify](https://github.com/stretchr/testify) - Assertions, mocks and suites for Go tests.

#### Rust

- [cargo-nextest](https://github.com/nextest-rs/nextest) - Next-generation test runner for Rust.
- [Criterion.rs](https://github.com/bheisler/criterion.rs) - Statistics-driven micro-benchmarking library for Rust.
- [insta](https://github.com/mitsuhiko/insta) - Snapshot testing library for Rust.
- [mockall](https://github.com/asomers/mockall) - Powerful mock object library for Rust.

#### C and C++

- [Catch2](https://github.com/catchorg/Catch2) - Modern C++ test framework with a header-only option.
- [doctest](https://github.com/doctest/doctest) - Fast single-header C++ testing framework.
- [GoogleTest](https://github.com/google/googletest) - Google's C++ testing and mocking framework.

#### Shell

- [Bats](https://github.com/bats-core/bats-core) - Bash Automated Testing System.
- [ShellCheck](https://github.com/koalaman/shellcheck) - Static analysis tool for shell scripts.

### API Testing and Mocking

- [Bruno](https://github.com/usebruno/bruno) - Offline-first, Git-friendly API client with a plain-text collection format.
- [EvoMaster](https://github.com/WebFuzzing/EvoMaster) - Fuzzer that generates system-level tests for REST, GraphQL and RPC APIs.
- [ghz](https://github.com/bojand/ghz) - Load testing and benchmarking tool for gRPC services.
- [grpcurl](https://github.com/fullstorydev/grpcurl) - Command-line tool for interacting with gRPC servers.
- [Hoppscotch](https://github.com/hoppscotch/hoppscotch) - Open-source API development ecosystem with a web client and CLI.
- [HTTPie](https://github.com/httpie/cli) - Human-friendly command-line HTTP client.
- [Hurl](https://github.com/Orange-OpenSource/hurl) - Runs and tests HTTP requests described in plain text.
- [Insomnia](https://github.com/Kong/insomnia) - Open-source API client for REST, GraphQL, gRPC and WebSockets.
- [json-server](https://github.com/typicode/json-server) - Full fake REST API from a JSON file with zero coding.
- [Keploy](https://github.com/keploy/keploy) - Generates API tests and mocks by recording real traffic.
- [Microcks](https://github.com/microcks/microcks) - Mocking and testing of API and microservice contracts.
- [Mockoon](https://github.com/mockoon/mockoon) - Desktop and CLI tool for designing mock APIs.
- [MockServer](https://github.com/mock-server/mockserver-monorepo) - Mocks and proxies HTTP and HTTPS services for testing.
- [MSW](https://github.com/mswjs/msw) - API mocking library that intercepts requests at the network level.
- [Newman](https://github.com/postmanlabs/newman) - Command-line collection runner for Postman.
- [nock](https://github.com/nock/nock) - HTTP server mocking and expectations library for Node.js.
- [Pact JS](https://github.com/pact-foundation/pact-js) - Consumer-driven contract testing for JavaScript.
- [Prism](https://github.com/stoplightio/prism) - HTTP mock server and validation proxy driven by OpenAPI documents.
- [RESTler](https://github.com/microsoft/restler-fuzzer) - Stateful REST API fuzzing tool.
- [Schemathesis](https://github.com/schemathesis/schemathesis) - Property-based testing for APIs defined by OpenAPI and GraphQL schemas.
- [Specmatic](https://github.com/specmatic/specmatic) - Turns API specifications into executable contract tests.
- [Tavern](https://github.com/taverntesting/tavern) - Pytest plugin for testing REST and MQTT APIs with YAML.
- [WireMock](https://github.com/wiremock/wiremock) - Flexible tool for mocking HTTP services.
- [xh](https://github.com/ducaale/xh) - Fast, friendly HTTP client inspired by HTTPie, written in Rust.

### Load and Performance Testing

- [ali](https://github.com/nakabonne/ali) - Load tester with real-time terminal analysis.
- [Apache JMeter](https://github.com/apache/jmeter) - Java application for load testing and measuring performance.
- [Artillery](https://github.com/artilleryio/artillery) - Load and functional testing toolkit for APIs and browsers.
- [bombardier](https://github.com/codesenberg/bombardier) - Fast cross-platform HTTP benchmarking tool written in Go.
- [Fortio](https://github.com/fortio/fortio) - Load testing library, command-line tool and echo server.
- [Gatling](https://github.com/gatling/gatling) - High-performance load testing tool with a code-based DSL.
- [Goose](https://github.com/tag1consulting/goose) - Load testing framework for Rust inspired by Locust.
- [hey](https://github.com/rakyll/hey) - HTTP load generator and ApacheBench replacement.
- [hyperfine](https://github.com/sharkdp/hyperfine) - Command-line benchmarking tool with statistical analysis.
- [k6](https://github.com/grafana/k6) - Developer-centric load testing tool with tests written in JavaScript.
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci) - Automates running Lighthouse for every commit.
- [Locust](https://github.com/locustio/locust) - Scalable user load testing tool defined in plain Python.
- [oha](https://github.com/hatoo/oha) - HTTP load generator with a terminal UI, written in Rust.
- [sitespeed.io](https://github.com/sitespeedio/sitespeed.io) - Tools for monitoring and measuring web performance.
- [Taurus](https://github.com/Blazemeter/taurus) - Automation-friendly framework for running JMeter, Gatling, k6 and other tools from YAML.
- [Vegeta](https://github.com/tsenart/vegeta) - HTTP load testing tool and library.
- [xk6](https://github.com/grafana/xk6) - Builds custom k6 binaries with extensions.

### Visual Regression Testing

- [Argos](https://github.com/argos-ci/argos) - Open-source visual testing platform for pull requests.
- [BackstopJS](https://github.com/garris/BackstopJS) - Visual regression testing for web apps using headless browsers.
- [jest-image-snapshot](https://github.com/americanexpress/jest-image-snapshot) - Jest matcher for image comparisons.
- [Loki](https://github.com/oblador/loki) - Visual regression testing for Storybook.
- [pixelmatch](https://github.com/mapbox/pixelmatch) - Small pixel-level image comparison library.
- [reg-suit](https://github.com/reg-viz/reg-suit) - Visual regression testing tool that stores snapshots in cloud storage.
- [Visual Regression Tracker](https://github.com/Visual-Regression-Tracker/Visual-Regression-Tracker) - Self-hosted service for tracking and reviewing visual changes.

### Accessibility Testing

- [Accessibility Insights](https://github.com/microsoft/accessibility-insights-web) - Tools for finding and fixing accessibility issues in web apps.
- [axe-core](https://github.com/dequelabs/axe-core) - Accessibility rules engine for automated testing of HTML pages.
- [axe-core npm](https://github.com/dequelabs/axe-core-npm) - Integrations of axe-core for Playwright, Puppeteer and WebdriverIO.
- [cypress-axe](https://github.com/component-driven/cypress-axe) - Cypress commands for running axe-core checks.
- [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y) - Static accessibility linting rules for JSX elements.
- [jest-axe](https://github.com/nickcolley/jest-axe) - Custom Jest matcher for axe accessibility tests.
- [Lighthouse](https://github.com/GoogleChrome/lighthouse) - Automated auditing for performance, accessibility and best practices.
- [Pa11y](https://github.com/pa11y/pa11y) - Automated accessibility testing from the command line.
- [Pa11y CI](https://github.com/pa11y/pa11y-ci) - Runs Pa11y against multiple URLs in continuous integration.

### Mutation, Property-Based and Fuzz Testing

- [AFL++](https://github.com/AFLplusplus/AFLplusplus) - Community-maintained fork of the American Fuzzy Lop fuzzer.
- [Atheris](https://github.com/google/atheris) - Coverage-guided fuzzing engine for Python.
- [cargo-fuzz](https://github.com/rust-fuzz/cargo-fuzz) - Command-line wrapper for using libFuzzer with Rust.
- [cargo-mutants](https://github.com/sourcefrog/cargo-mutants) - Mutation testing for Rust projects.
- [fast-check](https://github.com/dubzzz/fast-check) - Property-based testing framework for JavaScript and TypeScript.
- [gremlins](https://github.com/go-gremlins/gremlins) - Mutation testing tool for Go.
- [honggfuzz](https://github.com/google/honggfuzz) - Security-oriented feedback-driven fuzzer.
- [Hypothesis](https://github.com/HypothesisWorks/hypothesis) - Property-based testing library for Python.
- [Infection](https://github.com/infection/infection) - Mutation testing framework for PHP.
- [Jazzer](https://github.com/CodeIntelligenceTesting/jazzer) - Coverage-guided fuzzer for the JVM.
- [jqwik](https://github.com/jqwik-team/jqwik) - Property-based testing engine for the JVM.
- [mull](https://github.com/mull-project/mull) - Mutation testing tool for C and C++ based on LLVM.
- [Mutant](https://github.com/mbj/mutant) - Mutation testing tool for Ruby.
- [mutmut](https://github.com/boxed/mutmut) - Mutation testing system for Python.
- [OSS-Fuzz](https://github.com/google/oss-fuzz) - Continuous fuzzing service for open-source software.
- [PIT](https://github.com/hcoles/pitest) - State-of-the-art mutation testing system for the JVM.
- [proptest](https://github.com/proptest-rs/proptest) - Hypothesis-like property testing framework for Rust.
- [rapid](https://github.com/flyingmutant/rapid) - Property-based testing library for Go.
- [Stryker.NET](https://github.com/stryker-mutator/stryker-net) - Mutation testing for .NET.
- [StrykerJS](https://github.com/stryker-mutator/stryker-js) - Mutation testing for JavaScript, TypeScript and frameworks built on them.

### Test Data and Environments

- [Bogus](https://github.com/bchavez/Bogus) - Fake data generator for .NET.
- [Faker](https://github.com/joke2k/faker) - Python package that generates fake data.
- [Faker.js](https://github.com/faker-js/faker) - Generates massive amounts of realistic fake data in JavaScript.
- [FreezeGun](https://github.com/spulec/freezegun) - Python library for mocking the current date and time.
- [kind](https://github.com/kubernetes-sigs/kind) - Runs local Kubernetes clusters using Docker containers as nodes.
- [responses](https://github.com/getsentry/responses) - Utility for mocking the Python requests library.
- [Testcontainers for .NET](https://github.com/testcontainers/testcontainers-dotnet) - Throwaway containers for .NET integration tests.
- [Testcontainers for Go](https://github.com/testcontainers/testcontainers-go) - Throwaway containers for Go integration tests.
- [Testcontainers for Java](https://github.com/testcontainers/testcontainers-java) - Throwaway Docker containers for JUnit tests.
- [Testcontainers for Node.js](https://github.com/testcontainers/testcontainers-node) - Throwaway containers for Node.js integration tests.
- [Testcontainers for Python](https://github.com/testcontainers/testcontainers-python) - Throwaway containers for Python integration tests.
- [Toxiproxy](https://github.com/Shopify/toxiproxy) - TCP proxy that simulates network and system conditions for resilience testing.
- [vcrpy](https://github.com/kevin1024/vcrpy) - Records and replays HTTP interactions in Python tests.
- [WebMock](https://github.com/bblimke/webmock) - Library for stubbing and setting expectations on HTTP requests in Ruby.

### Reporting and Test Management

- [Allure Report](https://github.com/allure-framework/allure2) - Flexible multi-language test report tool.
- [CTRF](https://github.com/ctrf-io/ctrf) - Common Test Report Format for a consistent test result schema.
- [Kiwi TCMS](https://github.com/kiwitcms/kiwitcms) - Open-source test management system.
- [ReportPortal](https://github.com/reportportal/reportportal) - AI-powered test automation dashboard and analytics platform.
- [Test Reporter](https://github.com/dorny/test-reporter) - GitHub Action that displays test results from many frameworks.

### Security Testing

- [Gitleaks](https://github.com/gitleaks/gitleaks) - Detects secrets in code and Git history.
- [Nuclei](https://github.com/projectdiscovery/nuclei) - Template-based vulnerability scanner.
- [OWASP ZAP](https://github.com/zaproxy/zaproxy) - Dynamic application security scanner that can run in automation.
- [Semgrep](https://github.com/semgrep/semgrep) - Lightweight static analysis with customizable rules.
- [Trivy](https://github.com/aquasecurity/trivy) - Scanner for vulnerabilities, misconfigurations and secrets in containers and code.

### Chaos Engineering

- [Chaos Mesh](https://github.com/chaos-mesh/chaos-mesh) - Chaos engineering platform for Kubernetes.
- [Chaos Monkey](https://github.com/Netflix/chaosmonkey) - Randomly terminates instances to test resilience.
- [Chaos Toolkit](https://github.com/chaostoolkit/chaostoolkit) - Open API and tooling for chaos experiments.
- [ChaosBlade](https://github.com/chaosblade-io/chaosblade) - Chaos experiment toolkit for cloud-native and host environments.
- [LitmusChaos](https://github.com/litmuschaos/litmus) - Cloud-native chaos engineering framework.

### AI-Assisted Testing

- [Shortest](https://github.com/antiwork/shortest) - End-to-end tests written in natural language.
- [Testsigma](https://github.com/testsigmahq/testsigma) - Open-source test automation platform with natural-language test authoring.

## CI/CD and Release Automation

### Pipelines

- [Argo CD](https://github.com/argoproj/argo-cd) - Declarative GitOps continuous delivery for Kubernetes.
- [Concourse](https://github.com/concourse/concourse) - Container-based continuous integration system with pipelines defined as code.
- [Dagger](https://github.com/dagger/dagger) - Portable programmable CI/CD engine that runs pipelines in containers.
- [Flux](https://github.com/fluxcd/flux2) - GitOps toolkit for keeping Kubernetes clusters in sync with Git.
- [Jenkins](https://github.com/jenkinsci/jenkins) - Extensible open-source automation server.
- [Tekton](https://github.com/tektoncd/pipeline) - Kubernetes-native framework for building CI/CD systems.
- [Woodpecker CI](https://github.com/woodpecker-ci/woodpecker) - Community fork of Drone CI with container-based pipelines.

### GitHub Actions Tooling

- [act](https://github.com/nektos/act) - Runs GitHub Actions locally.
- [actionlint](https://github.com/rhysd/actionlint) - Static checker for GitHub Actions workflow files.
- [Super-Linter](https://github.com/super-linter/super-linter) - Combination of many linters that runs as a GitHub Action.

### Releases and Dependencies

- [Changesets](https://github.com/changesets/changesets) - Manages versioning and changelogs for multi-package repositories.
- [Dependabot](https://github.com/dependabot/dependabot-core) - Core logic behind GitHub's automated dependency updates.
- [GoReleaser](https://github.com/goreleaser/goreleaser) - Release automation for Go projects.
- [release-please](https://github.com/googleapis/release-please) - Generates release pull requests from Conventional Commits.
- [Renovate](https://github.com/renovatebot/renovate) - Automated dependency update tool for many package managers.
- [semantic-release](https://github.com/semantic-release/semantic-release) - Fully automated version management and package publishing.

## Infrastructure and Configuration Automation

- [Ansible](https://github.com/ansible/ansible) - Agentless IT automation platform using YAML playbooks.
- [Checkov](https://github.com/bridgecrewio/checkov) - Static analysis for infrastructure-as-code misconfigurations.
- [Chef InSpec](https://github.com/inspec/inspec) - Testing framework for compliance and security of infrastructure.
- [Conftest](https://github.com/open-policy-agent/conftest) - Tests structured configuration files with Open Policy Agent policies.
- [Crossplane](https://github.com/crossplane/crossplane) - Control plane framework for building cloud-native platforms.
- [Molecule](https://github.com/ansible/molecule) - Testing framework for Ansible roles and collections.
- [OpenTofu](https://github.com/opentofu/opentofu) - Open-source fork of Terraform for declarative infrastructure management.
- [Packer](https://github.com/hashicorp/packer) - Builds identical machine images from a single source configuration.
- [Pulumi](https://github.com/pulumi/pulumi) - Infrastructure as code in general-purpose programming languages.
- [Salt](https://github.com/saltstack/salt) - Event-driven automation and remote execution engine.
- [Terragrunt](https://github.com/gruntwork-io/terragrunt) - Thin wrapper that keeps Terraform and OpenTofu configurations DRY.
- [Terratest](https://github.com/gruntwork-io/terratest) - Go library for automated tests of infrastructure code.
- [Test Kitchen](https://github.com/test-kitchen/test-kitchen) - Integration testing harness for infrastructure code.
- [TFLint](https://github.com/terraform-linters/tflint) - Pluggable linter for Terraform configurations.

## Scripting and Developer Workflow

### Task Runners and Shells

- [direnv](https://github.com/direnv/direnv) - Loads and unloads environment variables depending on the current directory.
- [Fabric](https://github.com/fabric/fabric) - High-level Python library for executing shell commands over SSH.
- [Invoke](https://github.com/pyinvoke/invoke) - Python task execution tool and library.
- [just](https://github.com/casey/just) - Handy command runner that saves and runs project-specific commands.
- [mise](https://github.com/jdx/mise) - Polyglot tool version manager, environment manager and task runner.
- [Plumbum](https://github.com/tomerfiliba/plumbum) - Shell combinators library for writing shell-like Python scripts.
- [Task](https://github.com/go-task/task) - Task runner and build tool written in Go with a simple YAML schema.
- [zx](https://github.com/google/zx) - Tool for writing better shell scripts in JavaScript.

### Scheduling and Watching

- [entr](https://github.com/eradman/entr) - Runs arbitrary commands when files change.
- [Healthchecks](https://github.com/healthchecks/healthchecks) - Cron job monitoring service that alerts when pings stop.
- [Ofelia](https://github.com/mcuadros/ofelia) - Modern and low-footprint job scheduler for Docker environments.
- [Supercronic](https://github.com/aptible/supercronic) - Cron implementation designed for containers.
- [watchexec](https://github.com/watchexec/watchexec) - Executes commands in response to file modifications.

### Git Hooks and Code Quality

- [commitlint](https://github.com/conventional-changelog/commitlint) - Lints commit messages against conventions.
- [Husky](https://github.com/typicode/husky) - Git hooks made easy.
- [Lefthook](https://github.com/evilmartians/lefthook) - Fast and powerful Git hooks manager.
- [pre-commit](https://github.com/pre-commit/pre-commit) - Framework for managing and maintaining multi-language pre-commit hooks.

### Terminal Interaction

- [Expect for Python](https://github.com/pexpect/pexpect) - Python module for controlling and automating interactive programs.
- [Gum](https://github.com/charmbracelet/gum) - Glamorous shell scripts with prompts, spinners and styled output.

## Learning Resources

### Guides and Courses

_Documentation and articles worth reading before choosing tools._

- [Automate the Boring Stuff with Python](https://automatetheboringstuff.com) - Free book on automating everyday computer tasks with Python.
- [Google Testing Blog](https://testing.googleblog.com) - Articles about testing practices from engineers at Google.
- [JavaScript Testing Best Practices](https://github.com/goldbergyoni/javascript-testing-best-practices) - Over 50 best practices for JavaScript and Node.js testing.
- [Ministry of Testing](https://www.ministryoftesting.com) - Community and learning platform for software testers.
- [Playwright Documentation](https://playwright.dev) - Official guides and API reference for Playwright.
- [Test Automation University](https://testautomationu.applitools.com) - Free online courses on test automation.
- [The Practical Test Pyramid](https://martinfowler.com/articles/practical-test-pyramid.html) - Article on structuring automated tests across layers.

### Example Projects

- [Cypress Real World App](https://github.com/cypress-io/cypress-realworld-app) - Payment application used to demonstrate Cypress testing practices.
- [How They Automate on Mobile](https://github.com/testableapple/how-they-automate-on-mobile) - Collection of mobile automation practices from different companies.

## Related Lists

- [awesome-ci](https://github.com/ligurio/awesome-ci) - Continuous integration tools and services.
- [awesome-home-assistant](https://github.com/frenck/awesome-home-assistant) - Home Assistant resources.
- [awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers) - Model Context Protocol servers.
- [awesome-n8n-templates](https://github.com/enescingoz/awesome-n8n-templates) - Collection of ready-made n8n workflow templates.
- [awesome-playwright](https://github.com/mxschmitt/awesome-playwright) - Playwright resources and tools.
- [awesome-selenium](https://github.com/christian-bromann/awesome-selenium) - Selenium resources.
- [awesome-selfhosted](https://github.com/awesome-selfhosted/awesome-selfhosted) - Free software network services that can be hosted locally.
- [awesome-shortcuts](https://github.com/vhuty/awesome-shortcuts) - Apple Shortcuts automations.
- [awesome-test-automation](https://github.com/atinfo/awesome-test-automation) - Test automation frameworks and tools by language.
- [awesome-web-scraping](https://github.com/lorien/awesome-web-scraping) - Web scraping libraries and tools.
- [awesome-workflow-automation](https://github.com/dariubs/awesome-workflow-automation) - Workflow automation software, engines and tools.

## Contributing

Contributions are welcome. Read the [contribution guidelines](CONTRIBUTING.md) first.

## License

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)
