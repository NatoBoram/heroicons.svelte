import type { Meta, StoryObj } from '@storybook/svelte'
import { FingerPrint as FingerPrintSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Solid',
	component: FingerPrintSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<FingerPrintSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const FingerPrint: Story = {}
