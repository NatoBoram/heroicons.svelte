import type { Meta, StoryObj } from '@storybook/svelte'
import { PhoneArrowDownLeft as PhoneArrowDownLeftSvelte } from '../../../lib/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: PhoneArrowDownLeftSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<PhoneArrowDownLeftSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const PhoneArrowDownLeft: Story = {}
