import type { Meta, StoryObj } from '@storybook/svelte'
import FingerPrintSvelte from '../../../lib/16/solid/finger-print.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: FingerPrintSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<FingerPrintSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const FingerPrint: Story = {}
