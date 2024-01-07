import type { Meta, StoryObj } from '@storybook/svelte'
import PhoneSvelte from '../../../lib/16/solid/phone.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: PhoneSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<PhoneSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Phone: Story = {}
