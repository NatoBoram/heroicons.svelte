<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import LockOpenSvelte from '../../../lib/24/outline/lock-open.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: LockOpenSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="LockOpen" />
