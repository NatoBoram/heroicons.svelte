import type { Meta, StoryObj } from '@storybook/svelte'
import FingerPrintSvelte from '../../../lib/20/solid/finger-print.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: FingerPrintSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<FingerPrintSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const FingerPrint: Story = {}
