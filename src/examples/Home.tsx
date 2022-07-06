/**
 * Exampleサイト ホーム
 */

import { PageHeader, PageHeaderItem } from "lib/components/PageHeader";
import { Header } from "lib/layouts/Header";
import { Page } from "lib/layouts/Page";
import { Component } from "lib/types";

/**
 * Exampleサイト ホーム
 */
export const Home: Component = () => {
  return (
    <>
      <Header>
        <PageHeader>
          <PageHeaderItem>
            <img src="/images/logo.png" alt="ANDCORP" width="128" height="44" />
          </PageHeaderItem>
          <PageHeaderItem grow>test</PageHeaderItem>
          <PageHeaderItem>test2</PageHeaderItem>
        </PageHeader>
      </Header>
      <Page>test</Page>
    </>
  );
};
