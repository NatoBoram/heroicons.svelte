<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import UserCircleSvelte from '../../../lib/24/outline/user-circle.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: UserCircleSvelte,
		args: { class: '' },
	})
</script>

<Story name="UserCircle" />
