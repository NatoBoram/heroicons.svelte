<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import UserCircleSvelte from '../../../lib/16/solid/user-circle.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: UserCircleSvelte,
		args: { class: '' },
	})
</script>

<Story name="UserCircle" />
