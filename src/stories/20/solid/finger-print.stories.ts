import type { Meta, StoryObj } from '@storybook/svelte'
import { FingerPrint as FingerPrintSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: FingerPrintSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<FingerPrintSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const FingerPrint: Story = {}
