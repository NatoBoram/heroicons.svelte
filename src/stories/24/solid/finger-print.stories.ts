import type { Meta, StoryObj } from '@storybook/svelte'
import FingerPrintSvelte from '../../../lib/24/solid/finger-print.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: FingerPrintSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<FingerPrintSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const FingerPrint: Story = {}
