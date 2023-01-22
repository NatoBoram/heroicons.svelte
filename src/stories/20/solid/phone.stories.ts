import type { Meta, StoryObj } from '@storybook/svelte'
import PhoneSvelte from '../../../lib/20/solid/phone.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: PhoneSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<PhoneSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Phone: Story = {}
