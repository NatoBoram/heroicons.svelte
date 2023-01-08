import type { Meta, StoryObj } from '@storybook/svelte'
import { Phone as PhoneSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: PhoneSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<PhoneSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Phone: Story = {}
