import type { Meta, StoryObj } from '@storybook/svelte'
import { FingerPrint as FingerPrintSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: FingerPrintSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<FingerPrintSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const FingerPrint: Story = {}
