import React from 'react';
import Tracer from 'dd-trace';
import { GetServerSideProps, GetServerSidePropsResult, PreviewData, GetServerSidePropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';

type HandleServerSideProps<Q extends ParsedUrlQuery = ParsedUrlQuery, D extends PreviewData = PreviewData> = (
    context: GetServerSidePropsContext<Q, D> & {
        some: string;
    }
) => Promise<GetServerSidePropsResult<{ some: string }>>;

export const handleServerSideProps: HandleServerSideProps = async ({  some }) =>
    Tracer.trace('api.request', { resource: 'searchPage' }, async () => ({ props: { some } }))

export const getServerSideProps: GetServerSideProps = async ({ ...data }) => {
    return handleServerSideProps({ ...data, some: 'stuff' })
};

export const MyPage: React.FC<{ some: string }> = ({ some }) => <div>{some}</div>

export default MyPage;
