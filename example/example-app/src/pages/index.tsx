import Head from 'next/head'
import Image from 'next/image'
import {Inter} from '@next/font/google'
// import styles from '@/styles/Home.module.css'
import styled from "styled-components";
import {_colors, SomebayGlobalFonts, Typography} from "../../../../dist/esm";

const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <Page>
            <SomebayGlobalFonts/>

            <Typography.H1>Will the app definitely works on my computer?</Typography.H1>

            <Typography.H2>Will the app definitely works on my computer?</Typography.H2>

            <Typography.H3>Will the app definitely works on my computer?</Typography.H3>

            <Typography.H4>Will the app definitely works on my computer?</Typography.H4>

            <Typography.H5>Will the app definitely works on my computer?</Typography.H5>

            <Typography.H6>Will the app definitely works on my computer?</Typography.H6>

            <Typography.H7>Will the app definitely works on my computer?</Typography.H7>
        </Page>
    )
}

const Page = styled.main`
  color: ${_colors.somebayBlack};
  position: relative;
  overflow-x: hidden;
`