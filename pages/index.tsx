import { Button, Card, Input } from 'antd'
import type { NextPage } from 'next'
import Head from 'next/head'
import { ReactElement } from 'react'
import MainLayout from '../componets/layouts/MainLayout'

export default function Page() {
  return (
    <>
    <h1>Olá Ant No Next</h1>
    <Button type='primary'>Olá Ant</Button>
    <Card title="Olá Ant no Next">
      <Input type='number' size='large'></Input>
    </Card>
    </>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      {page}
    </MainLayout>
  )
}