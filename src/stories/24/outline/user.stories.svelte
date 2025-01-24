<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import UserSvelte from '../../../lib/24/outline/user.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: UserSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="User" />
