import type { Meta, StoryObj } from '@storybook/svelte'
import { Identification as IdentificationSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Outline',
	component: IdentificationSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<IdentificationSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Identification: Story = {}
