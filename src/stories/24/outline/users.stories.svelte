<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import UsersSvelte from '../../../lib/24/outline/users.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: UsersSvelte,
		args: { class: '' },
	})
</script>

<Story name="Users" />
