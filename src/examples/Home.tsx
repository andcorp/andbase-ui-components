/**
 * Exampleサイト ホーム
 */

import { Anchor } from "lib/components/Anchor";
import { Heading } from "lib/components/Heading";
import { PageFooter, PageFooterItem } from "lib/components/PageFooter";
import { PageHeader, PageHeaderItem } from "lib/components/PageHeader";
import { Footer } from "lib/layouts/Footer";
import { Header } from "lib/layouts/Header";
import { Page } from "lib/layouts/Page";
import { PageRoot } from "lib/layouts/PageRoot";
import { Component } from "lib/types";

/**
 * Exampleサイト ホーム
 */
export const Home: Component = () => {
  return (
    <PageRoot stretch>
      <Header>
        <PageHeader>
          <PageHeaderItem>
            <Anchor href="/">
              <img
                src="/images/logo.png"
                alt="ANDCORP"
                width="128"
                height="44"
              />
            </Anchor>
          </PageHeaderItem>
          <PageHeaderItem grow>
            <Anchor href="/">Top</Anchor>
            <Anchor href="/test">Test</Anchor>
          </PageHeaderItem>
          <PageHeaderItem>test2</PageHeaderItem>
        </PageHeader>
      </Header>
      <Page grow>
        <Heading level={1}>見出し1</Heading>
        <Heading level={2}>見出し2</Heading>
        <Heading level={3}>見出し3</Heading>
        <Heading level={4}>見出し4</Heading>
        <Heading level={5}>見出し5</Heading>
        <Heading level={6}>見出し6</Heading>
      </Page>
      <Footer>
        <PageFooter>
          <PageFooterItem grow>test1</PageFooterItem>
          <PageFooterItem>test2</PageFooterItem>
        </PageFooter>
      </Footer>
    </PageRoot>
  );
};
