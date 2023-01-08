import type { Meta, StoryObj } from '@storybook/svelte'
import { Phone as PhoneSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Solid',
	component: PhoneSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<PhoneSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Phone: Story = {}
