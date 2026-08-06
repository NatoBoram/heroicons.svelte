<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import UserMinusSvelte from '../../../lib/24/outline/user-minus.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: UserMinusSvelte,
		args: { class: '' },
	})
</script>

<Story name="UserMinus" />
