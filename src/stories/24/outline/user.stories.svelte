<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import UserSvelte from '../../../lib/24/outline/user.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: UserSvelte,
		args: { class: '' },
	})
</script>

<Story name="User" />
